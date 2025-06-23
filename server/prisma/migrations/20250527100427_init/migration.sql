/*
  Warnings:

  - A unique constraint covering the columns `[calendarId,eventId]` on the table `events` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "events_calendarId_eventId_key" ON "events"("calendarId", "eventId");
