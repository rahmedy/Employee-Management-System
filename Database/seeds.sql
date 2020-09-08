USE employee_data;

-- Departments-------
INSERT INTO departments (id, department_name)
VALUES (1, "Executive");

INSERT INTO departments (id, department_name)
VALUES (2, "Sales");

INSERT INTO departments (id, department_name)
VALUES (3, "Human Resources");

INSERT INTO departments (id, department_name)
VALUES (4, "IT");

INSERT INTO departments (id, department_name)
VALUES (5, "Finance");


-- Roles---------
INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Executive", 200000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES (" IT Executive", 200000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES (" Financial Executive", 200000, 1);


INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Director", 110000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Specialist", 90000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("HR Director", 140000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Human resources specialist", 120000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Cloud  Engineer", 950000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 100000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 115000, 5);

INSERT INTO roles (title, salary, department_id)
VALUES ("Financial Analyst", 125000, 5);


-- Employees -----

-- Executives ----
INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Rayan", "Ahmedy", 1, true);


INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Tim", "Brown", 1, true);

INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("John", "Cena", 1, true);

-- Sales----- 
INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Brad", "Pitt", 2, false);


INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Johnny", "Depp", 2, false);

-- HR ------
INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Ben", "Affleck", 3,false);


INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Tom", "Brady", 3, false);

-- IT ------

INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Lebron", "James", 4, false);


INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Larry", "Bird", 4, false);

-- Finance----

INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Peyton", "Manning", 5, false);

INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("James", "Harden", 5, false);

