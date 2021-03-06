USE employee_data;

-- Departments-------
INSERT INTO departments (id,department_name)
VALUES ( 1,"Executive");

INSERT INTO departments (id,department_name)
VALUES (2, "Sales");

INSERT INTO departments (id,department_name)
VALUES ( 3,"Human Resources");

INSERT INTO departments (id,department_name)
VALUES (4, "IT");

INSERT INTO departments (id,department_name)
VALUES (5, "Finance");


-- Roles---------
INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Executive", 200000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("IT Executive", 200000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Financial Executive", 200000, 1);


INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Director", 110000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Specialist", 90000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("HR Director", 140000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Human resources specialist", 120000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Cloud Engineer", 950000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 100000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 115000, 5);

INSERT INTO roles (title, salary, department_id)
VALUES ("Financial Analyst", 125000, 5);


-- employee -----

-- Executives ----
INSERT INTO employee (first_name, last_name, role_id,  is_manager)
VALUES ("Rayan", "Ahmedy", 1, true);


INSERT INTO employee (first_name, last_name, role_id,  is_manager)
VALUES ("Tim", "Brown", 1, true);

INSERT INTO employee (first_name, last_name, role_id, is_manager)
VALUES ("John", "Cena", 1,true);

-- Sales----- 
INSERT INTO employee (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Brad", "Pitt", 4, 1, false);


INSERT INTO employee (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Johnny", "Depp", 5, 1, false);

-- HR ------
INSERT INTO employee (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Ben", "Affleck", 6, 1,false);


INSERT INTO employee (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Tom", "Brady", 7, 1, false);

-- IT ------

INSERT INTO employee (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Lebron", "James", 8, 1, false);


INSERT INTO employee (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Larry", "Bird", 9,  1, false);

-- Finance----

INSERT INTO employee (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Peyton", "Manning", 10, 1, false);

INSERT INTO employee (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("James", "Harden", 11, 1, false);

