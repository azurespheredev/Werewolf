/*
  Warnings:

  - You are about to drop the column `image` on the `roles` table. All the data in the column will be lost.
  - Added the required column `avatar` to the `roles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "roles" DROP COLUMN "image",
ADD COLUMN     "avatar" TEXT NOT NULL;
