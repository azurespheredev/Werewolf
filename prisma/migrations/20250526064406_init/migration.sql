/*
  Warnings:

  - You are about to drop the column `expiresAt` on the `calendar_tokens` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[refreshToken]` on the table `calendar_tokens` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `refreshToken` to the `calendar_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "calendar_tokens" DROP COLUMN "expiresAt",
ADD COLUMN     "refreshToken" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "calendar_tokens_refreshToken_key" ON "calendar_tokens"("refreshToken");
