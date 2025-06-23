import * as sentry from "@sentry/node";

export function setupSentry() {
  sentry.init({
    dsn: process.env.SENTRY_DSN,

    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
  });
}
