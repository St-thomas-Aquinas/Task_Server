-- CreateTable
CREATE TABLE "Tasktable" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Decription" TEXT NOT NULL,
    "DateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "LastUpdate" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "UserName" TEXT NOT NULL,

    CONSTRAINT "Tasktable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tasktable" ADD CONSTRAINT "Tasktable_UserName_fkey" FOREIGN KEY ("UserName") REFERENCES "usertable"("UserName") ON DELETE RESTRICT ON UPDATE CASCADE;
