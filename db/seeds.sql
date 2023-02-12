USE company_db;


INSERT INTO department (name)
VALUES
('Sales'),
('Service'),
('Finance'),
('Human Resource'),
('Management');

INSERT INTO role (title, salary, department_id)
VALUES
('Lube Tech', 24000, 2),
('Shop Foreman', 100000, 2),
('Service Manager', 120000, 2),
('General Manager', 190000, 5),
('Service Advisor', 76000, 2),
('Sales Associates', 43000, 1),
('Chief Financial Officer', 90000, 3),
('Accountant', 72000, 3),
('QTM', 120000, 5),
('', 56000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Samson', 'Vang', 1, NULL),
('Samson', 'Vang', 2, 1),
('Samson', 'Vang', 3, NULL),
('Samson', 'Vang', 4, 1),
('Samson', 'Vang', 5, NULL);