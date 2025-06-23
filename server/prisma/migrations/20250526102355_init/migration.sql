/*
  Warnings:

  - You are about to drop the column `timeZone` on the `calendars` table. All the data in the column will be lost.
  - Added the required column `timezone` to the `calendars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "calendars" DROP COLUMN "timeZone",
ADD COLUMN     "timezone" TEXT NOT NULL;
