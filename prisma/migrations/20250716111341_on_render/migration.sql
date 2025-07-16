-- CreateTable
CREATE TABLE "usertable" (
    "id" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "UserName" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Avatar" TEXT NOT NULL DEFAULT 'null',
    "DateJoined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastProfileUpdate" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "usertable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usertable_Email_key" ON "usertable"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "usertable_UserName_key" ON "usertable"("UserName");
