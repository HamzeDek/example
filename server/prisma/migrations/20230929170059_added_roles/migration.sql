-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('superadmin', 'admin', 'user');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "ROLES" NOT NULL DEFAULT 'user';
