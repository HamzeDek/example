create Database HumanResourceManagement;

-- User Table
create table
    users (
        userId serial primary key,
        username text,
        email text UNIQUE,
        password text,
        joinedAt timestamp default CURRENT_TIMESTAMP,
        isAdmin bool DEFAULT (true)
    )
    drop table users
    -- Manager Table 
create table
    manager (
        managerId serial primary key,
        managerName text,
        managerAddress text,
        managerPhone text,
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP
    )
    -- Region Table 
create table
    regions (
        regionId serial primary key,
        region text,
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP
    )
    -- Countrytable 
create table
    countries (
        countryId serial primary key,
        country text,
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP,
        regionId int,
        constraint regionId FOREIGN key (regionId) REFERENCES regions (regionId)
    )
    -- location Table 
create table
    Locations (
        locationId serial primary key,
        address text,
        state text,
        postcode int,
        countryId int,
        constraint countryId FOREIGN key(countryId) REFERENCES countries(countryid),
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP
    )
    -- Table Department
create table
    Department (
        departmentId serial primary key,
        departmentName text,
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP
    )

    -- table Jobs
create table
    Jobs (
        jobId serial primary key,
        jobTitle text,
        minSalary int,
        maxSalary int,
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP
    )

    -- table JobHistory
create table
    JobHistory (
        jobHistoryId serial primary key,
        startDate timestamp DEFAULT CURRENT_TIMESTAMP,
        endDate timestamp DEFAULT CURRENT_TIMESTAMP,
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP,
        emplooyeeId int,
        departmentId int,
        jobId int,
        constraint departmentId FOREIGN key (departmentId) REFERENCES department (departmentId),
        constraint jobId FOREIGN key (jobId) REFERENCES jobs (jobId),
        constraint emplooyeeId FOREIGN key (emplooyeeId) REFERENCES emplooyee (emplooyeeId)
    )

    -- Table Emplooyee
create table
    emplooyee (
        emplooyeeId serial primary key,
        firstName text,
        lastName text,
        email text UNIQUE,
        phone text,
        DOB date,
        commisition int,
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP,
        departmentId int,
        managerId int,
        constraint departmentId FOREIGN key (departmentId) REFERENCES department (departmentId),
        constraint managerId FOREIGN key (managerId) REFERENCES manager (managerId)
    )

    -- Table Attendance...
create table
    Attendances (
        attendenceId serial primary key,
        absent text,
        present text,
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP,
        shift text,
        startDate timestamp DEFAULT CURRENT_TIMESTAMP,
        endDate timestamp DEFAULT CURRENT_TIMESTAMP,
        emplooyeeId int,
        constraint emplooyeeId FOREIGN key(emplooyeeId) REFERENCES emplooyee(emplooyeeId)
    )