/*
  Warnings:

  - Added the required column `name` to the `calendars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "calendars" ADD COLUMN     "name" TEXT NOT NULL;
