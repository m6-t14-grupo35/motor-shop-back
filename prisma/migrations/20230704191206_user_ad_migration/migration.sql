/*
  Warnings:

  - Added the required column `user_description` to the `ads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_img` to the `ads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `ads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ads" ADD COLUMN     "user_description" TEXT NOT NULL,
ADD COLUMN     "user_img" TEXT NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL;
