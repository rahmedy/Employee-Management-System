DROP DATABASE IF EXISTS employee_data;

/* Create database */
CREATE DATABASE employee_data;
USE employee_data;

/* Create new tables */
CREATE TABLE departments (
  id INT NOT NULL,
  department_name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  deparment_id INT NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

 