/*
  Warnings:

  - You are about to drop the column `code` on the `rooms` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "rooms_code_key";

-- AlterTable
ALTER TABLE "rooms" DROP COLUMN "code";
