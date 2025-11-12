/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[roomCode]` on the table `rooms` will be added. If there are existing duplicate values, this will fail.
  - The required column `roomCode` was added to the `rooms` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "roles" ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "team" TEXT NOT NULL DEFAULT 'villager';

-- AlterTable
ALTER TABLE "rooms" ADD COLUMN     "gameStarted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "maxPlayers" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "roomCode" TEXT NOT NULL,
ALTER COLUMN "timerLimit" SET DEFAULT 60;

-- CreateTable
CREATE TABLE "GameSession" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "phase" TEXT NOT NULL DEFAULT 'waiting',
    "dayNumber" INTEGER NOT NULL DEFAULT 0,
    "timeRemaining" INTEGER NOT NULL DEFAULT 0,
    "currentPhaseStarted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alivePlayers" TEXT NOT NULL DEFAULT '[]',
    "deadPlayers" TEXT NOT NULL DEFAULT '[]',
    "votes" TEXT NOT NULL DEFAULT '{}',
    "nightActions" TEXT NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameLog" (
    "id" SERIAL NOT NULL,
    "gameSessionId" INTEGER NOT NULL,
    "phase" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "actorId" INTEGER,
    "targetId" INTEGER,
    "description" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GameLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "playerName" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "rooms_roomCode_key" ON "rooms"("roomCode");

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameLog" ADD CONSTRAINT "GameLog_gameSessionId_fkey" FOREIGN KEY ("gameSessionId") REFERENCES "GameSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
