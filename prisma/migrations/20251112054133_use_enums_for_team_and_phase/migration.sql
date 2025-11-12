/*
  Warnings:

  - The `phase` column on the `GameSession` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `team` column on the `roles` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `phase` on the `GameLog` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Team" AS ENUM ('villager', 'werewolf', 'neutral');

-- CreateEnum
CREATE TYPE "GamePhase" AS ENUM ('waiting', 'night', 'day', 'voting', 'ended');

-- AlterTable
ALTER TABLE "GameLog" DROP COLUMN "phase",
ADD COLUMN     "phase" "GamePhase" NOT NULL;

-- AlterTable
ALTER TABLE "GameSession" DROP COLUMN "phase",
ADD COLUMN     "phase" "GamePhase" NOT NULL DEFAULT 'waiting';

-- AlterTable
ALTER TABLE "roles" DROP COLUMN "team",
ADD COLUMN     "team" "Team" NOT NULL DEFAULT 'villager';
