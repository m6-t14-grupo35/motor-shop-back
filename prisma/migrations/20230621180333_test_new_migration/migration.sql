/*
  Warnings:

  - Added the required column `createdAt` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "images" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;
