/*
  Warnings:

  - Added the required column `priceFIPE` to the `ads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ads" ADD COLUMN     "priceFIPE" INTEGER NOT NULL;
