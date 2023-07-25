-- Create the PersonalPortfolio database if it doesn't exists, 
-- using the utf8 character set and utf8_general_ci collation
create database if not exists PersonalPortfolio 
default character set utf8 collate utf8_general_ci;

use PersonalPortfolio;

-- Create the projects table
create table if not exists projects (
    projectID int not null primary key auto_increment,
    projectName varchar(255) not null,
    projectDescription varchar(500),    
    projectLink varchar(255) not null,
    projectImage varchar(255)
);