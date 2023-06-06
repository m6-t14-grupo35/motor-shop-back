/*
  Warnings:

  - You are about to alter the column `price` on the `ads` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Integer`.

*/
-- AlterTable
ALTER TABLE "ads" ALTER COLUMN "price" SET DATA TYPE INTEGER;
