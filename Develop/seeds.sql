
INSERT INTO department_table (name)
VALUES ('Web Development'),
       ('Data Science'),
       ('Human Resources'),
       ('Analytics');

INSERT INTO role_table (title, salary, department_id)
VALUES ('Software Engineer', 100000, 2),
       ('Data Scientist', 200000, 3),
       ('Data Analyst', 300000, 5),
       ('HR Manager', 400000, 4);

INSERT INTO employee_names (first_name, last_name, role_id, manager_id)
VALUES (John, Doe, 1, 1);
   
   