/*
  Warnings:

  - You are about to drop the column `latitude` on the `House` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `House` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[address,city,state,zip]` on the table `House` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `properyType` to the `House` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchasePrice` to the `House` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_userId_fkey";

-- AlterTable
ALTER TABLE "House" DROP COLUMN "latitude",
DROP COLUMN "longitude",
ADD COLUMN     "properyType" TEXT NOT NULL,
ADD COLUMN     "purchasePrice" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "House_address_city_state_zip_key" ON "House"("address", "city", "state", "zip");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
