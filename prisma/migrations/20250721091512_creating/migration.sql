/*
  Warnings:

  - You are about to drop the column `Decription` on the `Tasktable` table. All the data in the column will be lost.
  - Added the required column `Description` to the `Tasktable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tasktable" DROP COLUMN "Decription",
ADD COLUMN     "Description" TEXT NOT NULL;
