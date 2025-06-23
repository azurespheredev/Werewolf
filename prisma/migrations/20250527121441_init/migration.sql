/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `sync_tokens` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "sync_tokens_name_userId_key" ON "sync_tokens"("name", "userId");
