/*
  Warnings:

  - You are about to drop the column `color` on the `calendars` table. All the data in the column will be lost.
  - Added the required column `userId` to the `calendars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "calendar_tokens" ADD COLUMN     "calendarType" TEXT NOT NULL DEFAULT 'google';

-- AlterTable
ALTER TABLE "calendars" DROP COLUMN "color",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "calendars" ADD CONSTRAINT "calendars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
