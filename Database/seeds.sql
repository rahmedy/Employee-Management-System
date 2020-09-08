-- Departments
USE employee_data;

INSERT INTO departments (id, department_name)
VALUES (1, "Sales");

INSERT INTO departments (id, department_name)
VALUES (2, "Human Resources");

INSERT INTO departments (id, department_name)
VALUES (3, "IT");

INSERT INTO departments (id, department_name)
VALUES (4, "Finance");


-- Roles
INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Architect ", 110000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Specialist", 90000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Human resources specialist", 120000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("Cloud  Engineer", 950000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 100000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 115000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Financial Analyst", 125000, 4);


