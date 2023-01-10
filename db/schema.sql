DROP DATABASE IF EXISTS company_db;
CREATE DATABASE IF ONLY NOT EXISTS company_db;

USE company_db;

CREATE TABLE deparments (
  id INT NOT NULL,
  name VARCHAR(30)
);

CREATE TABLE roles (
  id INT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT NOT NULL
);
