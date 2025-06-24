export interface GoogleRefreshTokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  refresh_token_expires_in: number;
}

type CalendarListEntry = {
  kind: "calendar#calendarListEntry";
  etag: string;
  id: string;
  summary: string;
  timeZone: string;
  colorId: string;
  backgroundColor: string;
  foregroundColor: string;
  selected: boolean;
  accessRole: "owner" | "reader" | "writer" | "freeBusyReader";
  defaultReminders: Reminder[];
  notificationSettings?: NotificationSettings;
  primary?: boolean;
  description?: string;
  summaryOverride?: string;
  conferenceProperties: ConferenceProperties;
  deleted?: boolean;
};

type Reminder = {
  method: "email" | "popup" | "sms";
  minutes: number;
};

type NotificationSettings = {
  notifications: Notification[];
};

type Notification = {
  type: "eventCreation" | "eventChange" | "eventCancellation" | "eventResponse";
  method: "email" | "sms";
};

type ConferenceProperties = {
  allowedConferenceSolutionTypes: ("hangoutsMeet" | "eventHangout")[];
};

export interface GoogleCalendarListResponse {
  kind: "calendar#calendarList";
  etag: string;
  nextSyncToken: string;
  items: CalendarListEntry[];
  error: {
    errors: {
      domain: string;
      reason: string;
      message: string;
    }[];
  };
}

export interface CalendarEventResponse {
  kind: string;
  etag: string;
  summary: string;
  description: string;
  updated: string;
  timeZone: string;
  accessRole: string;
  defaultReminders: Reminder[];
  nextSyncToken?: string;
  nextPageToken?: string;
  items: CalendarEvent[];
  error: {
    errors: {
      domain: string;
      reason: string;
      message: string;
    }[];
  };
}

interface CalendarEvent {
  kind: string;
  etag: string;
  id: string;
  status: string;
  htmlLink?: string;
  created?: string;
  updated?: string;
  summary?: string;
  description?: string;
  location?: string;
  creator?: CalendarUser;
  organizer?: CalendarUser;
  start?: EventDateTime;
  end?: EventDateTime;
  iCalUID?: string;
  sequence?: number;
  reminders?: {
    useDefault: boolean;
  };
  eventType?: string;
  recurringEventId?: string;
  originalStartTime?: EventDateTime;
  attendees?: EventAttendee[];
  guestsCanInviteOthers?: boolean;
  privateCopy?: boolean;
  attachments?: EventAttachment[];
}

interface CalendarUser {
  email: string;
  self?: boolean;
  displayName?: string;
  organizer?: boolean;
}

interface EventDateTime {
  dateTime: string;
  timeZone: string;
}

interface EventAttendee {
  email: string;
  displayName?: string;
  self?: boolean;
  organizer?: boolean;
  optional?: boolean;
  responseStatus: string;
}

interface EventAttachment {
  fileUrl: string;
  title: string;
  iconLink?: string;
}

export interface FullCalendarEvent {
  id: number;
  title: string;
  description: string;
  start: string;
  end: string;
  color: string;
  organizer: string;
  name: string;
  avatar: string;
}
