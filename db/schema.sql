DROP DATABASE IF EXISTS EmployeeTracker_db;
CREATE DATABASE EmployeeTracker_db;

USE EmployeeTracker_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id iNT NOT NULL,
    manager_id VARCHAR(30) NULL,
    PRIMARY KEY(id)
);