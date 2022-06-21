USE EmployeeTracker_db;

INSERT INTO departments (name)
VALUES
('Human Resources'),
('Research and Developmen'),
('Marketing'),
('Accounting and Finance');

INSERT INTO roles (title, salary, department_id)
VALUES
('Human Resources Manager', 75, 1),
('Human Resources Advisor', 55, 1),
('Senior Developor', 125, 2),
('Developer', 80, 2),
('Marketing Manager', 90, 3),
('Marketing Officer', 70, 3),
('Financial Manager', 150, 4),
('Financial Analyst', 130, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Ammar', 'Henry', '1', null),
('Georgia', 'Bain', '2', 'Ammar Henry'),
('Shaquille', 'Macleod', '3', 'Ammar Henry'),
('Rhia', 'Kerr', '4', null),
('Kia', 'Mcmillan', '5', 'Rhia Kerr'),
('Saara', 'Mcbride', '6', 'Rhia Kerr'),
('Renesmee', 'Guerra', '7', 'Rhia Kerr'),
('Jaheim', 'Whittle', '8', null),
('Maja', 'Murray', '9', 'Jaheim Whittle'),
('Becky', 'Cotton', '10', null);