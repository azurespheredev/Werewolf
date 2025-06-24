import { prisma } from "../prisma/client";
import {
  CalendarEventResponse,
  GoogleCalendarListResponse,
  GoogleRefreshTokenResponse,
} from "../types/calendar";
import {
  CALENDAR_EVENT_BATCH_SIZE,
  EXCLUDED_CALENDAR_IDS,
  GOOGLE_CALENDAR_API_URL,
  GOOGLE_OAUTH_BASE_URL,
} from "../utils/constants";

interface CalendarDataType {
  id: number;
  email: string;
  timezone: string;
}

export async function getSyncedCalendarIds(
  accessToken: string,
  userId: number
): Promise<{
  success: boolean;
  calendars: CalendarDataType[];
  message?: string;
}> {
  const existingSyncToken = await prisma.sync_tokens.findUnique({
    where: {
      name_userId: {
        name: "calendars",
        userId,
      },
    },
  });

  let nextSyncToken = "";
  let data = null;

  if (existingSyncToken) {
    nextSyncToken = existingSyncToken.token;
  }

  console.info(`🔵 [UserID: ${userId}] Fetching calendar list from Google...`);

  try {
    const response = await fetch(
      `${GOOGLE_CALENDAR_API_URL}/users/me/calendarList${
        nextSyncToken ? `?syncToken=${nextSyncToken}` : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    data = (await response.json()) as GoogleCalendarListResponse;
    if (!data) {
      return {
        success: false,
        calendars: [],
        message: "Failed to retrieve calendars list from the Google Calendar.",
      };
    }

    if (data.error) {
      console.error(
        `🔴 [UserID: ${userId}] Error fetching calendar list: ${JSON.stringify(
          data.error
        )}`
      );
      return {
        success: false,
        calendars: [],
        message: "Error occurred while syncing calendars.",
      };
    }
  } catch (error) {
    console.error(
      `🔴 [UserID: ${userId}] An error occurred while fetching calendar list: ${String(
        error
      )}`
    );
    return {
      success: false,
      calendars: [],
      message: `Internal server error occurred while syncing: ${String(error)}`,
    };
  }

  const newCalendars = data.items
    .filter((item) => !EXCLUDED_CALENDAR_IDS.includes(item.id))
    .filter((item) => !item.deleted)
    .map((item) => ({
      name: item.primary ? "Primary" : item.summaryOverride || item.id,
      email: item.id,
      userId,
      timezone: item.timeZone || "America/New_York",
    }));

  const deletedCalendars = data.items.filter((item) => item.deleted);

  if (newCalendars.length > 0) {
    console.log("🔵 Creating new calendars into the database...");
    await prisma.calendars.createMany({
      data: newCalendars,
      skipDuplicates: true,
    });
  }

  if (deletedCalendars.length > 0) {
    console.log("🔵 Deleted calendars found. Removing from the database...");

    const deletedCalendarIds = deletedCalendars.map((item) => item.id);

    const deletedLocalCalendars = await prisma.calendars.findMany({
      where: {
        email: {
          in: deletedCalendarIds,
        },
      },
    });

    await prisma.events.deleteMany({
      where: {
        calendarId: {
          in: deletedLocalCalendars.map((item) => item.id),
        },
      },
    });

    await prisma.calendars.deleteMany({
      where: {
        email: {
          in: deletedCalendarIds,
        },
      },
    });
  }

  if (data.nextSyncToken) {
    if (existingSyncToken) {
      await prisma.sync_tokens.update({
        where: {
          name_userId: {
            name: "calendars",
            userId,
          },
        },
        data: { token: data.nextSyncToken },
      });
    } else {
      await prisma.sync_tokens.create({
        data: {
          name: "calendars",
          token: data.nextSyncToken,
          userId,
        },
      });
    }
  }

  const calendars = await prisma.calendars.findMany({
    where: { userId },
  });

  return {
    success: true,
    calendars: calendars.map((calendar) => ({
      id: calendar.id,
      email: calendar.email,
      timezone: calendar.timezone || "America/New_York",
    })),
  };
}

export async function refreshGoogleCalendarToken(
  refreshToken: string
): Promise<string> {
  const response = await fetch(`${GOOGLE_OAUTH_BASE_URL}/token`, {
    method: "POST",
    body: JSON.stringify({
      client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
      client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  const data = (await response.json()) as GoogleRefreshTokenResponse;

  if (!data.access_token) {
    throw new Error("Failed to refresh Google Calendar access token.");
  }

  await prisma.calendar_tokens.update({
    where: { refreshToken },
    data: {
      accessToken: data.access_token,
      expiresAt: new Date(Date.now() + data.expires_in * 1000),
    },
  });

  return data.access_token;
}

export async function syncCalendarEvents(
  calendarId: number,
  calendarEmail: string,
  accessToken: string,
  userId: number
): Promise<boolean> {
  const tokenKey = `events_${calendarId}`;

  const existingSyncToken = await prisma.sync_tokens.findUnique({
    where: {
      name_userId: {
        name: tokenKey,
        userId,
      },
    },
  });

  let nextSyncToken = "";
  const newEvents = [];
  const deletedEvents = [];

  console.info(
    `🔵 [UserID: ${userId}] Syncing events for calendar ${calendarEmail}...`
  );

  try {
    let url = `${GOOGLE_CALENDAR_API_URL}/calendars/${encodeURIComponent(
      calendarEmail
    )}/events`;

    if (existingSyncToken) {
      url += `?syncToken=${existingSyncToken.token}`;
    } else {
      url += `?singleEvents=true`;
    }

    while (url) {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      const data = (await response.json()) as CalendarEventResponse;

      if (!data || data.error) {
        // Handle expired sync token (error code 410)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (data.error && (data.error as any).code === 410) {
          console.warn(
            `🟠 Sync token expired for calendar ${calendarId}. Resetting token...`
          );
          await prisma.sync_tokens.deleteMany({
            where: { name: tokenKey, userId },
          });
          // Retry with fresh sync
          return await syncCalendarEvents(
            calendarId,
            calendarEmail,
            accessToken,
            userId
          );
        }

        console.error(
          `🔴 [UserID: ${userId}] Error fetching events for calendar ${calendarEmail}:`,
          JSON.stringify(data.error)
        );

        return false;
      }

      // Extract confirmed events
      newEvents.push(
        ...(data.items || [])
          .filter(
            (item) =>
              item.status === "confirmed" &&
              item.summary?.toLowerCase() !== "happy birthday!"
          )
          .map((item) => ({
            calendarId,
            eventId: item.id,
            summary: item.summary || "Busy",
            description: item.description || "No Description",
            start: item.start?.dateTime || new Date().toISOString(),
            end: item.end?.dateTime || new Date().toISOString(),
            creator: item.creator?.email || "N/A",
            organizer: item.organizer?.email || "N/A",
          }))
      );

      // Extract cancelled/deleted events
      deletedEvents.push(
        ...(data.items || []).filter(
          (item) => item.status === "cancelled" || item.status === "deleted"
        )
      );

      // Handle pagination
      if (data.nextPageToken) {
        url = `${GOOGLE_CALENDAR_API_URL}/calendars/${encodeURIComponent(
          calendarEmail
        )}/events?pageToken=${data.nextPageToken}`;

        if (!existingSyncToken) {
          url += `&singleEvents=true`;
        } else {
          url += `&syncToken=${existingSyncToken.token}`;
        }
      } else {
        nextSyncToken = data.nextSyncToken || "";
        url = ""; // End loop
      }
    }

    // Insert new events
    if (newEvents.length > 0) {
      console.info(
        `🔵 [UserID: ${userId}] Inserting ${newEvents.length} new events for calendar ${calendarEmail}...`
      );

      for (let i = 0; i < newEvents.length; i += CALENDAR_EVENT_BATCH_SIZE) {
        const batch = newEvents.slice(i, i + CALENDAR_EVENT_BATCH_SIZE);

        await Promise.all(
          batch.map((event) =>
            prisma.events.upsert({
              where: {
                calendarId_eventId: {
                  calendarId: event.calendarId,
                  eventId: event.eventId,
                },
              },
              update: {
                summary: event.summary,
                description: event.description,
                start: event.start,
                end: event.end,
                creator: event.creator,
                organizer: event.organizer,
              },
              create: event,
            })
          )
        );
      }
    }

    // Remove deleted events
    if (deletedEvents.length > 0) {
      console.info(
        `🔵 [UserID: ${userId}] Removing ${deletedEvents.length} deleted events for calendar ${calendarEmail}...`
      );

      await prisma.events.deleteMany({
        where: {
          calendarId,
          eventId: {
            in: deletedEvents.map((item) => item.id),
          },
        },
      });
    }
  } catch (error) {
    console.error(
      `🔴 [UserID: ${userId}] An error occurred syncing calendar ${calendarId}:`,
      error
    );
    return false;
  }

  // Save nextSyncToken for future incremental syncs
  if (nextSyncToken) {
    if (existingSyncToken) {
      await prisma.sync_tokens.update({
        where: {
          name_userId: {
            name: tokenKey,
            userId,
          },
        },
        data: { token: nextSyncToken },
      });
    } else {
      await prisma.sync_tokens.create({
        data: {
          name: tokenKey,
          token: nextSyncToken,
          userId,
        },
      });
    }
  }

  return true;
}
