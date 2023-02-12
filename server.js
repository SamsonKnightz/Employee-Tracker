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
      db.query('SELECT * FROM employee', (err, employee) => {
        console.table(employee);
        init();
      });
    }
    case 'View All Departments': {
      db.query('SELECT * FROM department', (err, department) => {
        console.table(department);
        init();
      });
    }
    case 'View All Roles': {
      db.query('SELECT * FROM role', (err, role) => {
        console.table(role);
        init();
      });
    }
    // case 'Add Employee': {
    //   db.query('INSERT INTO employee', (err, employee) => {
    //     console.table(employee);
    //     init();
    //   });
    // }
    // case 'Add A Department': {
    //   db.query('SELECT * FROM employee', (err, department) => {
    //     console.table(department);
    //     init();
    //   });
    // }
    // case 'Add A Role': {
    //   db.query('SELECT * FROM role', (err, role) => {
    //     console.table(role);
    //     init();
    //   });
    // }
    // case 'Add A Department': {
    //   db.query('SELECT * FROM employee', (err, employee) => {
    //     console.table(employee);
    //     init();
    //   });
    // }
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