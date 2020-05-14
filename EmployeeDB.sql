DROP DATABASE IF EXISTS employee_management_DB;
CREATE database employee_management_DB;

USE employee_management_DB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR (30) NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name) VALUES ("Kevin", "Smeraglio");
INSERT INTO employee (first_name, last_name) VALUES ("Barry", "Bonds");
INSERT INTO employee (first_name, last_name) VALUES ("Samantha", "Johnson");
INSERT INTO employee (first_name, last_name) VALUES ("Pamela", "Anderson");
INSERT INTO employee (first_name, last_name) VALUES ("Brian", "Dawkins");
INSERT INTO employee (first_name, last_name) VALUES ("Steve", "Jobs");
INSERT INTO employee (first_name, last_name) VALUES ("Jerry", "Stiller");
INSERT INTO employee (first_name, last_name) VALUES ("Marshall", "Mathers");
INSERT INTO employee (first_name, last_name) VALUES ("Jessica", "Smith");

SELECT employee.id, employee.first_name, employee.last_name,
	role.title, role.salary, department.name AS departmentName
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id;



