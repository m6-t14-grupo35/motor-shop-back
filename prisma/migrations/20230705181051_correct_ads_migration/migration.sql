/*
  Warnings:

  - You are about to drop the column `user_description` on the `ads` table. All the data in the column will be lost.
  - You are about to drop the column `user_img` on the `ads` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `ads` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ads" DROP COLUMN "user_description",
DROP COLUMN "user_img",
DROP COLUMN "user_name";
