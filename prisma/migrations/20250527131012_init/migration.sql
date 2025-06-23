/*
  Warnings:

  - A unique constraint covering the columns `[email,userId]` on the table `calendars` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "calendars_email_userId_key" ON "calendars"("email", "userId");
