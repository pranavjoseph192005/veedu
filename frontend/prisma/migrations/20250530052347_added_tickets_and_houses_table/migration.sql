-- CreateTable
CREATE TABLE "Tickets" (
    "id" SERIAL NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "houseId" INTEGER NOT NULL,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "Houses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
