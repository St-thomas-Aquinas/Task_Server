/*
  Warnings:

  - You are about to drop the `Tasktable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tasktable" DROP CONSTRAINT "Tasktable_UserName_fkey";

-- DropTable
DROP TABLE "Tasktable";

-- CreateTable
CREATE TABLE "tasktable" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "DateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "LastUpdate" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "UserName" TEXT NOT NULL DEFAULT 'null',

    CONSTRAINT "tasktable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tasktable" ADD CONSTRAINT "tasktable_UserName_fkey" FOREIGN KEY ("UserName") REFERENCES "usertable"("UserName") ON DELETE RESTRICT ON UPDATE CASCADE;
