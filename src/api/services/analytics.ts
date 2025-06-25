import { prisma } from "../prisma/client";
import { AnalyticsData } from "../types/analytics";

export async function getJobApplyAnalytics(
  fromDate: Date | undefined,
  endDate: Date | undefined
): Promise<AnalyticsData[][]> {
  const users = await prisma.users.findMany({
    where: {
      isAdmin: false,
    },
    select: {
      id: true,
      name: true,
      avatar: true,
      groupId: true,
    },
  });

  const all: AnalyticsData[] = [];
  const groupMap: Record<string, number> = {};

  for (const user of users) {
    const applicationCount = await prisma.job_applications.count({
      where: {
        userId: user.id,
        ...(fromDate && { createdAt: { gte: fromDate, lte: endDate } }),
      },
    });

    all.push({
      name: user.name,
      avatar: user.avatar,
      count: applicationCount,
    });

    if (user.groupId) {
      groupMap[user.groupId] = (groupMap[user.groupId] || 0) + applicationCount;
    }
  }

  const top = all.sort((a, b) => b.count - a.count).slice(0, 3);

  const groups: AnalyticsData[] = Object.entries(groupMap).map(
    ([groupId, totalCount]) => ({
      name: `Group ${groupId}`,
      count: totalCount,
    })
  );

  return [top, groups, all];
}

export async function getInterviewAnalytics(
  fromDate: Date | undefined,
  endDate: Date | undefined
): Promise<AnalyticsData[][]> {
  const users = await prisma.users.findMany({
    where: {
      isAdmin: false,
    },
    select: {
      id: true,
      name: true,
      avatar: true,
      groupId: true,
    },
  });

  const all: AnalyticsData[] = [];
  const groupMap: Record<string, number> = {};

  for (const user of users) {
    const calendars = await prisma.calendars.findMany({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
      },
    });

    const calendarIds = calendars.map((c) => c.id);

    const eventCount = await prisma.events.count({
      where: {
        calendarId: {
          in: calendarIds,
        },
        ...(fromDate && { start: { gte: fromDate, lte: endDate } }),
      },
    });

    all.push({
      name: user.name,
      avatar: user.avatar,
      count: eventCount,
    });

    if (user.groupId) {
      groupMap[user.groupId] = (groupMap[user.groupId] || 0) + eventCount;
    }
  }

  const top = all.sort((a, b) => b.count - a.count).slice(0, 3);

  const groupStats: AnalyticsData[] = Object.entries(groupMap).map(
    ([groupId, totalCount]) => ({
      name: `Group ${groupId}`,
      count: totalCount,
    })
  );

  return [top, groupStats, all];
}

export async function getJobOfferAnalytics(
  fromDate: Date | undefined,
  endDate: Date | undefined
): Promise<AnalyticsData[][]> {
  const users = await prisma.users.findMany({
    where: {
      isAdmin: false,
    },
    select: {
      id: true,
      name: true,
      avatar: true,
      groupId: true,
    },
  });

  const all: AnalyticsData[] = [];
  const groupMap: Record<string, number> = {};

  for (const user of users) {
    const offerCount = await prisma.job_offers.count({
      where: {
        userId: user.id,
        ...(fromDate && { receivedAt: { gte: fromDate, lte: endDate } }),
      },
    });

    all.push({
      name: user.name,
      avatar: user.avatar,
      count: offerCount,
    });

    if (user.groupId) {
      groupMap[user.groupId] = (groupMap[user.groupId] || 0) + offerCount;
    }
  }

  const top = all.sort((a, b) => b.count - a.count).slice(0, 3);

  const groupStats: AnalyticsData[] = Object.entries(groupMap).map(
    ([groupId, totalCount]) => ({
      name: `Group ${groupId}`,
      count: totalCount,
    })
  );

  return [top, groupStats, all];
}
