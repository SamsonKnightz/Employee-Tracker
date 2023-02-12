const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
  user: "root",
  database: "company_db",
},
  console.log(`Connected to the company_db database.`)
);

const chooseOption = (type) => {
  switch (type) {
    case 'View All Employees': {
      db.query('SELECT * FROM employees', (err, employees) => {
        console.table(employees);
      });
    }
    case 'View All Departments': {
      selectAll('department', true);
      break;
    }
    case 'View All Roles': {
      selectAll('role', true);
      break;
    }
    case 'Add Employee': {
      addEmployee();
      break;
    }
    case 'Add Department': {
      addDepartment();
      break;
    }
    case 'Add A Role': {
      addRole();
      break;
    }
    case 'Update An Emplyee Role': {
      updateDepartment();
      break;
    }
    
  }
};

const init = () => {
  prompt({
    type: 'rawlist',
    message: 'Choose one of the following:',
    choices: [
      'View All Employees',
      'View All Departments',
      'View All Roles',
      'Add Employee',
      'Add A Department',
      'Add A Role',
      'Update An Employee Role'
    ],
    name: 'type',
  })
    .then((answers) => {
      chooseOption(answers.type);
    });
};

init();