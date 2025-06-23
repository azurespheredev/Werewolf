/*
  Warnings:

  - Added the required column `userId` to the `job_offers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "job_offers" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "job_offers" ADD CONSTRAINT "job_offers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
