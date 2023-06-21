/*
  Warnings:

  - You are about to drop the column `createdAt` on the `images` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "images" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;
