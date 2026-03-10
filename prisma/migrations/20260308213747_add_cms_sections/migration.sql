/*
  Warnings:

  - You are about to drop the column `logoUrl` on the `brands` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "brands" DROP COLUMN "logoUrl";

-- CreateTable
CREATE TABLE "Presence" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "main" BOOLEAN NOT NULL DEFAULT false,
    "detail" TEXT NOT NULL,
    "flag" TEXT NOT NULL DEFAULT '',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Presence_pkey" PRIMARY KEY ("id")
);
