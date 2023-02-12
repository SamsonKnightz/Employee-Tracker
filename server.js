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