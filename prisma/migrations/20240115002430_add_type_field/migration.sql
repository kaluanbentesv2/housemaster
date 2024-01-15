/*
  Warnings:

  - Added the required column `type` to the `House` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "HouseType" AS ENUM ('RESIDENCE', 'POOLHOUSE', 'COMERCIAL');

-- AlterTable
ALTER TABLE "House" ADD COLUMN     "type" "HouseType" NOT NULL;
