/*
  Warnings:

  - You are about to drop the column `Quarter_cumulated` on the `dataset` table. All the data in the column will be lost.
  - Added the required column `Quarter_cumuled` to the `dataset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dataset" DROP COLUMN "Quarter_cumulated",
ADD COLUMN     "Quarter_cumuled" INTEGER NOT NULL;
