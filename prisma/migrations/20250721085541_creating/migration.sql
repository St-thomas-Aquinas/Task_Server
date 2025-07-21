/*
  Warnings:

  - You are about to drop the `Tasktable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tasktable" DROP CONSTRAINT "Tasktable_UserName_fkey";

-- DropTable
DROP TABLE "Tasktable";
