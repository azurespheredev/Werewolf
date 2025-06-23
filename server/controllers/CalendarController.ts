import { Request, Response } from "express";
import * as qs from "qs";
import { FullCalendarEvent } from "../types/calendar";
import { prisma } from "../prisma/client";
import {
  getSyncedCalendarIds,
  refreshGoogleCalendarToken,
  syncCalendarEvents,
} from "../services/calendar";
import { CalendarScope } from "../utils/enums";
import { getCalendarFromDate } from "../utils/functions";
import { DEFAULT_TIMEZONE } from "../utils/constants";

export default class CalendarController {
  static async getData(req: Request, res: Response) {
    const scope = (req.query.scope as CalendarScope) || CalendarScope.ALL;
    const timezone = (req.query.timezone as string) || DEFAULT_TIMEZONE;

    const calendars = await prisma.calendars.findMany();
    const calendarEvents: FullCalendarEvent[] = [];
    const fromDate = getCalendarFromDate(scope, timezone);

    await Promise.all(
      calendars.map(async (calendar) => {
        const user = await prisma.users.findFirst({
          where: { id: calendar.userId },
        });

        if (!user) {
          return;
        }

        const events = await prisma.events.findMany({
          where: {
            calendarId: calendar.id,
            start: {
              gte: fromDate,
            },
          },
        });

        events.forEach((event) => {
          calendarEvents.push({
            id: event.id,
            title: event.summary,
            description: event.description,
            start: event.start.toISOString(),
            end: event.end.toISOString(),
            color: user.color,
            organizer: event.organizer,
            name: user.name,
            avatar: user.avatar,
          });
        });
      })
    );

    res.json({
      success: true,
      message: "Successfully retrieved calendar list.",
      data: calendarEvents,
    });
  }

  static async getList(req: Request, res: Response) {
    const userId = (req.user as { id: number }).id;

    const calendars = await prisma.calendars.findMany({
      where: { userId },
    });

    // Sort calendars so that the one with "Primary" in its name comes first
    const sortedCalendars = [...calendars].sort((a, b) => {
      const aIsPrimary = a.name?.toLowerCase().includes("primary");
      const bIsPrimary = b.name?.toLowerCase().includes("primary");

      if (aIsPrimary && !bIsPrimary) return -1;
      if (!aIsPrimary && bIsPrimary) return 1;
      return 0;
    });

    res.json({
      success: true,
      data: sortedCalendars,
    });
  }

  static async googleCallback(req: Request, res: Response) {
    const { code, state } = req.query;
    const { userId } = JSON.parse(state as string);

    console.info(
      `🔵 [UserID: ${userId}] Generating Google calendar access token...`
    );

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.stringify({
        code,
        client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
        client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        redirect_uri: `${process.env.BASE_URL}/api/calendar/google/callback`,
        grant_type: "authorization_code",
      }),
    });

    const { access_token, refresh_token, expires_in } =
      (await tokenRes.json()) as {
        access_token: string;
        refresh_token: string;
        expires_in: number;
      };

    if (!access_token) {
      console.error(`🔴 [UserID: ${userId}] Failed to obtain access token.`);
      res.status(500).json({
        success: false,
        message: "Failed to obtain access token from Google OAuth.",
      });
      return;
    }

    console.info(
      `🟢 [UserID: ${userId}] Successfully obtained access token for Google calendar.`
    );

    const existingToken = await prisma.calendar_tokens.findFirst({
      where: { userId: Number(userId), type: "google" },
    });

    if (existingToken) {
      await prisma.calendar_tokens.update({
        where: { id: existingToken.id },
        data: {
          accessToken: access_token,
          refreshToken: refresh_token,
          isRevoked: false,
          expiresAt: new Date(Date.now() + expires_in * 1000),
        },
      });
    } else {
      await prisma.calendar_tokens.create({
        data: {
          accessToken: access_token,
          refreshToken: refresh_token,
          userId: Number(userId),
          type: "google",
          expiresAt: new Date(Date.now() + expires_in * 1000),
        },
      });
    }

    res.redirect(
      `${process.env.FRONTEND_URL}/settings?tab=integrations&syncing=true`
    );
  }

  static async syncGoogleCalendar(req: Request, res: Response) {
    const userId = (req.user as { id: number }).id;
    let syncErrorMessage = "";
    let accessToken = "";

    const calendarToken = await prisma.calendar_tokens.findFirst({
      where: { userId },
    });

    if (!calendarToken) {
      console.error(`🔴 [UserID: ${userId}] No calendar access tokens found.`);
      res.json({
        success: false,
        message: "No calendar access tokens found.",
      });
      return;
    }

    accessToken = calendarToken.accessToken;

    if (calendarToken.expiresAt < new Date()) {
      console.info(
        `🔵 [UserID: ${userId}] Refreshing expired token for user with refresh token ${calendarToken.refreshToken}`
      );

      accessToken = await refreshGoogleCalendarToken(
        calendarToken.refreshToken
      );
    }

    const {
      success,
      calendars: syncedCalendars,
      message,
    } = await getSyncedCalendarIds(accessToken, userId);

    if (!success) {
      res.json({
        success,
        message,
      });
      return;
    }

    if (syncedCalendars.length === 0) {
      console.info(`🟠 [UserID: ${userId}] No calendars to sync.`);
      res.json({
        success: false,
        message: "You don't have any calendars to sync.",
        data: [],
      });
      return;
    }

    console.info(
      `🟢 [UserID: ${userId}] Successfully synced ${syncedCalendars.length} calendars.`
    );

    console.info(
      `🔵 [UserID: ${userId}] Syncing events for ${syncedCalendars.length} calendars...`
    );

    await Promise.all(
      syncedCalendars.map(async (calendar) => {
        const isSynced = await syncCalendarEvents(
          calendar.id,
          calendar.email,
          calendarToken.accessToken,
          userId
        );

        if (!isSynced) {
          syncErrorMessage = `Failed to sync calendar events for ${calendar.email}.`;
        }
      })
    );

    if (syncErrorMessage) {
      res.json({
        success: false,
        message: syncErrorMessage,
      });
      return;
    }

    console.info(
      `🟢 [UserID: ${userId}] Successfully synced calendar events for all calendars.`
    );

    res.json({
      success: true,
      message: "Successfully synced calendars.",
      data: syncedCalendars,
    });
  }

  static async removeCalendar(req: Request, res: Response) {
    const userId = (req.user as { id: number }).id;
    const { calendarId } = req.params;

    console.info(
      `🔵 [UserID: ${userId}] Removing calendar with ID ${calendarId}.`
    );

    const calendar = await prisma.calendars.findFirst({
      where: { id: Number(calendarId), userId },
    });

    if (!calendar) {
      console.error(`🔴 [UserID: ${userId}] Calendar not found.`);
      res.json({
        success: false,
        message: "Cannot find the calendar with the given ID.",
      });
      return;
    }

    await prisma.events.deleteMany({
      where: { calendarId: Number(calendarId) },
    });

    await prisma.sync_tokens.delete({
      where: {
        name_userId: { name: `events_${calendarId}`, userId: Number(userId) },
      },
    });

    await prisma.calendars.delete({
      where: { id: Number(calendarId) },
    });

    console.info(
      `🟢 [UserID: ${userId}] Successfully removed calendar with email: ${calendar.email}`
    );
    res.json({
      success: true,
      message: `Calendar ${calendar.email} has been removed.`,
    });
  }

  static async resetCalendar(req: Request, res: Response) {
    const userId = (req.user as { id: number }).id;

    console.info(`🔵 [UserID: ${userId}] Formatting the calendar data...`);

    const calendars = await prisma.calendars.findMany({
      where: { userId },
    });

    if (calendars.length === 0) {
      console.info(`🟠 [UserID: ${userId}] No calendars found to reset.`);
      res.json({
        success: true,
        message: "No calendars found to reset.",
      });
      return;
    }

    // Delete all sync tokens for the user
    await prisma.sync_tokens.deleteMany({
      where: { userId },
    });

    await prisma.events.deleteMany({
      where: { calendarId: { in: calendars.map((c) => c.id) } },
    });

    // Delete all calendar tokens for the user
    await prisma.calendar_tokens.deleteMany({
      where: { userId },
    });

    // Delete all calendars for the user
    await prisma.calendars.deleteMany({
      where: { userId },
    });

    console.info(`🟢 [UserID: ${userId}] Successfully reset calendar data.`);

    res.json({
      success: true,
      message: "Successfully removed all the calendars.",
    });
  }
}
