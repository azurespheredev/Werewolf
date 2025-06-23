/*
  Warnings:

  - You are about to drop the column `calendarType` on the `calendar_tokens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "calendar_tokens" DROP COLUMN "calendarType",
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'google';
