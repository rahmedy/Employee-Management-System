const mysql = require('mysql');
const inquirer = require('inquirer');
const questions = require('./assets/js/questions.js');
const table = require('console.table');

//create connection to mysql db
const connection = mysql.createConnection({
	host: 'locatlhost',
	port: 3306,
	user: 'root',
	password: 'Ht208476',
	database: 'employee_data'
});

connection.connect((err) => {
	if (err) throw err;
	init();
});

//  <---Begins inital questions -----> //
async function init() {
	await inquirer.prompt(questions.initialQ).then(function(answer) {
		switch (answer.what) {
			case 'View Departments':
				viewDepartments();
				break;

			case 'View Roles':
				viewRoles();
				break;

			case 'View Employees':
				viewEmployees();
				break;

			case 'Add Department':
				addDepartment();
				break;

			case 'Add Role':
				newRole();
				break;

			case 'Add Employee':
				newEmployee();
				break;

			case 'Update Employee Role':
				updateRole();
				break;

			case 'Exit':
				connection.end();
				break;
		}
	});
}

function viewDepartments() {
	const query = 'SELECT * FROM departments';
	connection.query(query, (err, res) => {
		if (err) throw err;
		console.log('\n ------------------------------------------------------------------------\n');
		console.table(res);
		init();
	});
}

function viewRoles() {
	const query =
		'SELECT roles.id, roles.title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id';
	connection.query(query, (err, res) => {
		if (err) throw err;
		console.log('\n ------------------------------------------------------------------------\n');
		console.table(res);
		init();
	});
}

function viewEmployees() {
	const query =
		'employee.id, employee.first_name, employee.last_name, role.title, department.department, role.salary, manager.manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN manager ON employee.manager_id = manager.id LEFT JOIN department ON role.department_id = department.id';
	connection.query(query, (err, res) => {
		if (err) throw err;
		console.log('\n ------------------------------------------------------------------------\n');
		console.table(res);
		init();
	});
}

function addDepartment() {}

function newRole() {}

function newEmployee() {}

function updateRole() {}
