/*
  Warnings:

  - The primary key for the `attendances` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `attendenceid` on the `attendances` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "attendances" DROP CONSTRAINT "attendances_pkey",
DROP COLUMN "attendenceid",
ADD COLUMN     "attendanceid" SERIAL NOT NULL,
ADD CONSTRAINT "attendances_pkey" PRIMARY KEY ("attendanceid");
