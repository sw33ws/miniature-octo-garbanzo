const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('./server')

// The menu / logo
console.log("************************");
console.log("*                      *");
console.log("*       Employee       *");
console.log("*                      *");
console.log("*       Manager        *");
console.log("*                      *");
console.log("*                      *");
console.log("************************");
questions();

// The questionaire on what you can do with the program
function questions() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What do you want to do?',
            name: 'options',
            choices: ['view all Departments', 'View all Roles', 'View all employees', 'Add a Department', 'Add a role', 'Add an Employee', 'Update an Employee Role', 'Exit'],
        },
]).then (data => {
    if (data.options == 'view all Departments') {
        db.query("SELECT * FROM departments", (err, res) => {
            console.table(res);
            questions();
        })
    }
    if (data.options == 'View all Roles') {
        db.query("SELECT * FROM roles", (err, res) => {
            console.table(res);
            questions();
        })
    }
    if (data.options == 'View all employees') {
        db.query("SELECT * FROM employees", (err, res) => {
            console.table(res);
            questions();
        })
    }
    if (data.options == 'Add a Department') {
        addingDepartment();
    }
    if (data.options == 'Add a role') {
        addingRole();
    }
    if (data.options == 'Add an Employee') {
        addingEmployee();
    }
    if (data.options == 'Update an Employee Role') {
      updatingEmployee();
    }
    if (data.options == 'Exit') {
        console.log("Have a nice day!")
    }
})
};

// The new Departments input
function addingDepartment() {
    inquirer
  .prompt([
      {
        type: 'input',
        message: 'Write your Department here!',
        name: 'Department',
      },
]) .then (data => {
  db.query("INSERT INTO departments SET?", {
    name: data.Department
  })
  questions();
}) 
};

// The New Roles input
function addingRole() {
    inquirer
  .prompt([
      {
        type: 'input',
        message: 'Write your Title here!',
        name: 'Title',
      },
      {
        type: 'input',
        message: 'Write your Salary here!',
        name: 'Salary',
      },
      {
        type: 'list',
        message: 'Choice your Department!',
        name: 'id',
        // add the list of departments
      },
]) .then (data => {
  db.query("INSERT INTO role SET?", {
    title: data.Title,
    salary: data.Salary,
    department_id: data.id
  })
  questions();
})
};

// The New Employee
function addingEmployee() {
    inquirer
  .prompt([
      {
        type: 'input',
        message: 'Write your First Name here!',
        name: 'firstName',
      },
      {
        type: 'input',
        message: 'Write your Last Name here!',
        name: 'lastName',
      },
      {
        type: 'list',
        message: 'what is your role?',
        name: 'role',
        // add a thing that chooses the role
      },
      {
        type: 'input',
        message: 'Who is your manager?',
        name: 'manager',
      },
]) .then (data => {
  db.query('INSERT INTO employees SET?', {
    first_name: data.firstName,
    last_name: data.lastName,
    role_id: data.role,
    manager_id: data.manager
  })
  questions();
})
};

// Updating Employee Role
function updatingEmployee() {
  inquirer
.prompt([
    {
      type: 'list',
      message: 'What employee needs a new role?',
      name: 'role',
      // add a thing that chooses the role
    },
    {
      type: 'list',
      message: "What's the new role?",
      name: 'manager',
      // add a thing that chooses the manager
    },
])
};