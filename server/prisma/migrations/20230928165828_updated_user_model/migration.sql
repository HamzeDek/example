-- CreateTable
CREATE TABLE "attendances" (
    "attendenceid" SERIAL NOT NULL,
    "absent" TEXT,
    "present" TEXT,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "shift" TEXT,
    "startdate" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "enddate" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "emplooyeeid" INTEGER,

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("attendenceid")
);

-- CreateTable
CREATE TABLE "countries" (
    "countryid" SERIAL NOT NULL,
    "country" TEXT,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "regionid" INTEGER,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("countryid")
);

-- CreateTable
CREATE TABLE "department" (
    "departmentid" SERIAL NOT NULL,
    "departmentname" TEXT,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "department_pkey" PRIMARY KEY ("departmentid")
);

-- CreateTable
CREATE TABLE "emplooyee" (
    "emplooyeeid" SERIAL NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "dob" DATE,
    "commisition" INTEGER,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "departmentid" INTEGER,
    "managerid" INTEGER,

    CONSTRAINT "emplooyee_pkey" PRIMARY KEY ("emplooyeeid")
);

-- CreateTable
CREATE TABLE "jobhistory" (
    "jobhistoryid" SERIAL NOT NULL,
    "startdate" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "enddate" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "emplooyeeid" INTEGER,
    "departmentid" INTEGER,
    "jobid" INTEGER,

    CONSTRAINT "jobhistory_pkey" PRIMARY KEY ("jobhistoryid")
);

-- CreateTable
CREATE TABLE "jobs" (
    "jobid" SERIAL NOT NULL,
    "jobtitle" TEXT,
    "minsalary" INTEGER,
    "maxsalary" INTEGER,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("jobid")
);

-- CreateTable
CREATE TABLE "locations" (
    "locationid" SERIAL NOT NULL,
    "address" TEXT,
    "state" TEXT,
    "postcode" INTEGER,
    "countryid" INTEGER,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("locationid")
);

-- CreateTable
CREATE TABLE "manager" (
    "managerid" SERIAL NOT NULL,
    "managername" TEXT,
    "manageraddress" TEXT,
    "managerphone" TEXT,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "manager_pkey" PRIMARY KEY ("managerid")
);

-- CreateTable
CREATE TABLE "regions" (
    "regionid" SERIAL NOT NULL,
    "region" TEXT,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("regionid")
);

-- CreateTable
CREATE TABLE "users" (
    "userid" TEXT NOT NULL,
    "username" TEXT,
    "email" TEXT,
    "password" TEXT,
    "joinedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "isadmin" BOOLEAN DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userid")
);

-- CreateIndex
CREATE UNIQUE INDEX "emplooyee_email_key" ON "emplooyee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "emplooyeeid" FOREIGN KEY ("emplooyeeid") REFERENCES "emplooyee"("emplooyeeid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "countries" ADD CONSTRAINT "regionid" FOREIGN KEY ("regionid") REFERENCES "regions"("regionid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emplooyee" ADD CONSTRAINT "departmentid" FOREIGN KEY ("departmentid") REFERENCES "department"("departmentid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emplooyee" ADD CONSTRAINT "managerid" FOREIGN KEY ("managerid") REFERENCES "manager"("managerid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jobhistory" ADD CONSTRAINT "departmentid" FOREIGN KEY ("departmentid") REFERENCES "department"("departmentid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jobhistory" ADD CONSTRAINT "emplooyeeid" FOREIGN KEY ("emplooyeeid") REFERENCES "emplooyee"("emplooyeeid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "jobhistory" ADD CONSTRAINT "jobid" FOREIGN KEY ("jobid") REFERENCES "jobs"("jobid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "countryid" FOREIGN KEY ("countryid") REFERENCES "countries"("countryid") ON DELETE NO ACTION ON UPDATE NO ACTION;
