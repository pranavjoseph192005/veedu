/*
  Warnings:

  - You are about to drop the column `purchaseMonth` on the `House` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."House" DROP COLUMN "purchaseMonth",
ADD COLUMN     "purchaseDate" TIMESTAMP(3);
