DROP DATABASE IF EXISTS employee_management_DB;
CREATE database employee_management_DB;

USE employee_management_DB;

CREATE TABLE employees (
  id INT NOT NULL,
  first_name VARCHAR(100) NULL,
  last_name VARCHAR(100) NULL,
  title VARCHAR(100) NULL,
  department VARCHAR(100) NULL,
  salary INT NULL,
  manager VARCHAR(100) NULL,
  PRIMARY KEY (id)
);