DROP DATABASE IF EXISTS employee_tracker;

/* Create database */
CREATE DATABASE employee_tracker;
USE employee_tracker;

/* Create new tables */
CREATE TABLE departments (
  dptid INT NOT NULL,
  department_name VARCHAR(30) NULL,
  PRIMARY KEY (dptid)
);