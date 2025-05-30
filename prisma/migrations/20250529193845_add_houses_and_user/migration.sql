/*
  Warnings:

  - Added the required column `ownerId` to the `Houses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Houses" ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Houses" ADD CONSTRAINT "Houses_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
