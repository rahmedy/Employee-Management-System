const mysql = require('mysql');
const inquirer = require('inquirer');
const questions = require("./assets/js/questions.js")
const cTable = require('console.table');

//create connection to mysql db
const connection = mysql.createConnection({
    host: 'locatlhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_data'
});

connection.connect((err) => {
    if (err) throw err;
    init();
});

//  <---Begins inital questions -----> //
async function init() {
    await inquirer.prompt(questions.initialQ).then(function (answer) {
        switch (answer.what) {
            case 'view employees':
                viewEmployees();
                break;

            case 'view roles':
                viewRoles();
                break;

            case 'view departments':
                viewDepartments();
                break;

            case 'add departmnet':
                addDepartment();
                break;

            case 'Add Role':
                addRole();
                break;

            case 'Add Employee':
                addEmployee();
                break;

            case 'update employee role':
                updateRole();
                break;

                case "Exit":
                    connection.end();
                    break;
        }
    });
}