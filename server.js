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
      break;
    }
    case 'View All Departments': {
      db.query('SELECT * FROM department', (err, department) => {
        console.table(department);
        init();
      });
      break;
    }
    case 'View All Roles': {
      db.query('SELECT * FROM role', (err, role) => {
        console.table(role);
        init();
      });
      break;
    }
    case 'Add Employee': {
      prompt([{
        type: 'input',
        name: 'first_name',
        message: 'What is the first name of new emplyee?'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'What is the last name of the new emplyee?'
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'What is your employee\'s role_id?'
      },
      {
        type: 'input',
        name: 'manager_id',
        message: 'What is your employee\'s manager_id'
      },
      ])
        .then((answers) => {
          db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES
                ('${answers.first_name}', '${answers.last_name}','${answers.role_id}', '${answers.manager_id}');`)
          console.table(answers);
          init();
        });
      break;
    }
    // case 'Add A Department': {
    //   db.query('SELECT * FROM employee', (err, department) => {
    //     console.table(department);
    //     init();
    //   });
    // break;
    // }
    // case 'Add A Role': {
    //   db.query('SELECT * FROM role', (err, role) => {
    //     console.table(role);
    //     init();
    //   });
    // break;
    // }
    // case 'Add A Department': {
    //   db.query('SELECT * FROM employee', (err, employee) => {
    //     console.table(employee);
    //     init();
    //   });
    // break;
    // }
    // case 'EXIT': {
    //   db.end();
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