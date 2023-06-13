/*
  Warnings:

  - You are about to drop the column `descriptiomn` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - Added the required column `description` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "descriptiomn",
DROP COLUMN "phone",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL;
