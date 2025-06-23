-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "comments" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
