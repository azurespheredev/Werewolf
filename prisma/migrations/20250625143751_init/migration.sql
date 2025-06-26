/*
  Warnings:

  - You are about to drop the column `roles` on the `rooms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "rooms" DROP COLUMN "roles",
ADD COLUMN     "players" TEXT NOT NULL DEFAULT '[]';
