import { DateTime } from "luxon";
import { AnalyticsScope, CalendarScope } from "./enums";
import { DEFAULT_TIMEZONE } from "./constants";

export function getDateRange(
  scope: AnalyticsScope,
  timezone: string
): {
  fromDate?: Date;
  endDate?: Date;
} {
  const now = DateTime.now().setZone(timezone);

  let fromDate: DateTime | undefined;
  let endDate: DateTime | undefined;

  switch (scope) {
    case AnalyticsScope.TODAY:
      fromDate = now.startOf("day");
      endDate = now.endOf("day");
      break;
    case AnalyticsScope.YESTERDAY:
      fromDate = now.minus({ days: 1 }).startOf("day");
      endDate = now.minus({ days: 1 }).endOf("day");
      break;
    case AnalyticsScope.ONE_WEEK:
      fromDate = now.minus({ days: 7 }).startOf("day");
      endDate = now.endOf("day");
      break;
    case AnalyticsScope.ONE_MONTH:
      fromDate = now.minus({ months: 1 }).startOf("day");
      endDate = now.endOf("day");
      break;
    case AnalyticsScope.SIX_MONTH:
      fromDate = now.minus({ months: 6 }).startOf("day");
      endDate = now.endOf("day");
      break;
    case AnalyticsScope.ONE_YEAR:
      fromDate = now.minus({ years: 1 }).startOf("day");
      endDate = now.endOf("day");
      break;
    case AnalyticsScope.ALL:
    default:
      return { fromDate: undefined, endDate: undefined };
  }

  return {
    fromDate: fromDate.toUTC().toJSDate(),
    endDate: endDate.toUTC().toJSDate(),
  };
}

export function getCalendarFromDate(
  scope: CalendarScope,
  timezone: string = DEFAULT_TIMEZONE
): Date {
  // Use Luxon to handle timezone-aware date calculations
  let fromDate = DateTime.now().setZone(timezone).startOf("day");

  switch (scope) {
    case CalendarScope.ONE_MONTH:
      fromDate = fromDate.minus({ months: 1 });
      break;
    case CalendarScope.THREE_MONTH:
      fromDate = fromDate.minus({ months: 3 });
      break;
    case CalendarScope.SIX_MONTH:
      fromDate = fromDate.minus({ months: 6 });
      break;
    case CalendarScope.ONE_YEAR:
      fromDate = fromDate.minus({ years: 1 });
      break;
    case CalendarScope.ALL:
    default:
      return new Date(0); // Return epoch time for "all" scope
  }

  return fromDate.toUTC().toJSDate();
}
