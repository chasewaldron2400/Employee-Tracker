-- Active: 1723505728753@@127.0.0.1@5432@employee_db
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE employee_names (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER
  );

CREATE TABLE department_table (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
  );

  CREATE TABLE role_table (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30)UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL
  );


