/*
  Warnings:

  - Made the column `absent` on table `attendances` required. This step will fail if there are existing NULL values in that column.
  - Made the column `present` on table `attendances` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdat` on table `attendances` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedat` on table `attendances` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shift` on table `attendances` required. This step will fail if there are existing NULL values in that column.
  - Made the column `startdate` on table `attendances` required. This step will fail if there are existing NULL values in that column.
  - Made the column `enddate` on table `attendances` required. This step will fail if there are existing NULL values in that column.
  - Made the column `emplooyeeid` on table `attendances` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `countries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdat` on table `countries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedat` on table `countries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `regionid` on table `countries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `departmentname` on table `department` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdat` on table `department` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedat` on table `department` required. This step will fail if there are existing NULL values in that column.
  - Made the column `firstname` on table `emplooyee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `emplooyee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `emplooyee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `emplooyee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dob` on table `emplooyee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `commisition` on table `emplooyee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdat` on table `emplooyee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedat` on table `emplooyee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `departmentid` on table `emplooyee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `managerid` on table `emplooyee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `startdate` on table `jobhistory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `enddate` on table `jobhistory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdat` on table `jobhistory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedat` on table `jobhistory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `emplooyeeid` on table `jobhistory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `departmentid` on table `jobhistory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `jobid` on table `jobhistory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `jobtitle` on table `jobs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `minsalary` on table `jobs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `maxsalary` on table `jobs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdat` on table `jobs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedat` on table `jobs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `locations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `locations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `postcode` on table `locations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `countryid` on table `locations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdat` on table `locations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedat` on table `locations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `managername` on table `manager` required. This step will fail if there are existing NULL values in that column.
  - Made the column `manageraddress` on table `manager` required. This step will fail if there are existing NULL values in that column.
  - Made the column `managerphone` on table `manager` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdat` on table `manager` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedat` on table `manager` required. This step will fail if there are existing NULL values in that column.
  - Made the column `region` on table `regions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdat` on table `regions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedat` on table `regions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `joinedat` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "attendances" ALTER COLUMN "absent" SET NOT NULL,
ALTER COLUMN "present" SET NOT NULL,
ALTER COLUMN "createdat" SET NOT NULL,
ALTER COLUMN "updatedat" SET NOT NULL,
ALTER COLUMN "shift" SET NOT NULL,
ALTER COLUMN "startdate" SET NOT NULL,
ALTER COLUMN "enddate" SET NOT NULL,
ALTER COLUMN "emplooyeeid" SET NOT NULL;

-- AlterTable
ALTER TABLE "countries" ALTER COLUMN "country" SET NOT NULL,
ALTER COLUMN "createdat" SET NOT NULL,
ALTER COLUMN "updatedat" SET NOT NULL,
ALTER COLUMN "regionid" SET NOT NULL;

-- AlterTable
ALTER TABLE "department" ALTER COLUMN "departmentname" SET NOT NULL,
ALTER COLUMN "createdat" SET NOT NULL,
ALTER COLUMN "updatedat" SET NOT NULL;

-- AlterTable
ALTER TABLE "emplooyee" ALTER COLUMN "firstname" SET NOT NULL,
ALTER COLUMN "lastname" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "dob" SET NOT NULL,
ALTER COLUMN "commisition" SET NOT NULL,
ALTER COLUMN "createdat" SET NOT NULL,
ALTER COLUMN "updatedat" SET NOT NULL,
ALTER COLUMN "departmentid" SET NOT NULL,
ALTER COLUMN "managerid" SET NOT NULL;

-- AlterTable
ALTER TABLE "jobhistory" ALTER COLUMN "startdate" SET NOT NULL,
ALTER COLUMN "enddate" SET NOT NULL,
ALTER COLUMN "createdat" SET NOT NULL,
ALTER COLUMN "updatedat" SET NOT NULL,
ALTER COLUMN "emplooyeeid" SET NOT NULL,
ALTER COLUMN "departmentid" SET NOT NULL,
ALTER COLUMN "jobid" SET NOT NULL;

-- AlterTable
ALTER TABLE "jobs" ALTER COLUMN "jobtitle" SET NOT NULL,
ALTER COLUMN "minsalary" SET NOT NULL,
ALTER COLUMN "maxsalary" SET NOT NULL,
ALTER COLUMN "createdat" SET NOT NULL,
ALTER COLUMN "updatedat" SET NOT NULL;

-- AlterTable
ALTER TABLE "locations" ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "state" SET NOT NULL,
ALTER COLUMN "postcode" SET NOT NULL,
ALTER COLUMN "countryid" SET NOT NULL,
ALTER COLUMN "createdat" SET NOT NULL,
ALTER COLUMN "updatedat" SET NOT NULL;

-- AlterTable
ALTER TABLE "manager" ALTER COLUMN "managername" SET NOT NULL,
ALTER COLUMN "manageraddress" SET NOT NULL,
ALTER COLUMN "managerphone" SET NOT NULL,
ALTER COLUMN "createdat" SET NOT NULL,
ALTER COLUMN "updatedat" SET NOT NULL;

-- AlterTable
ALTER TABLE "regions" ALTER COLUMN "region" SET NOT NULL,
ALTER COLUMN "createdat" SET NOT NULL,
ALTER COLUMN "updatedat" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "joinedat" SET NOT NULL;
