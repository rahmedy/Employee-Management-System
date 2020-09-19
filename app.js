const mysql = require('mysql');
const inquirer = require('inquirer');
const questions = require('./assets/questions.js');
const table = require('console.table');

console.log(
	'\n',
	'<----------------------Welcome to Your Employee Database----------------------------------->',
	'\n'
);

//create connection to mysql db
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Ht208476',
	database: 'employee_data'
});

connection.connect(function(err) {
	if (err) throw err;
	init();
});

//  <---Begins inital questions -----> //
function init() {
	inquirer.prompt(questions.initialQ).then(function(answer) {
		switch (answer.what) {
			case 'View Departments':
				viewDepartments();
				break;

			case 'View Roles':
				viewRoles();
				break;

			case 'View Employees':
				viewemployee();
				break;

			case 'Add Department':
				addDepartment();
				break;

			case 'Delete Department':
				deleteDepartment();
				break;

			case 'Add Role':
				newRole();
				break;

			case 'Remove Role':
				removeRole();
				break;

			case 'Add Employee':
				newEmployee();
				break;

			case 'Remove Employee':
				removeEmployee();
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
		'SELECT roles.department_id, roles.title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id';
	connection.query(query, (err, res) => {
		if (err) throw err;
		console.log('\n ------------------------------------------------------------------------\n');
		console.table(res);
		init();
	});
}

function viewemployee() {
	const query =
		// 'SELECT roles.department_id, roles.title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id';
		"SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, departments.department_name, CONCAT (manager.first_name, ' ', manager.last_name) as manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id LEFT JOIN employee manager ON employee.manager_id = manager.id";
	connection.query(query, (err, res) => {
		if (err) throw err;
		console.log('\n ------------------------------------------------------------------------\n');
		console.table(res);
		init();
	});
}

function addDepartment() {
	inquirer.prompt(questions.addDepart).then(function(answers) {
		// const newDepartment = answers.newDepartment;
		const query = 'INSERT INTO departments (department_name) VALUES (?)';
		connection.query(query, [ answers.newDepartment ], function(err) {
			if (err) throw err;
			console.log('\n ----------------------------------------\n');
			viewDepartments();
			init();
		});
	});
}

function deleteDepartment() {
	inquirer.prompt(questions.deleteDpar).then(function(answers) {
		const query = 'DELETE FROM departments WHERE department_name = ?';
		connection.query(query, [ answers.delete ], function(err) {
			if (err) throw err;
			console.log('\n ----------------------------------------\n');
			viewDepartments();
			init();
		});
	});
}

function newRole() {
	inquirer.prompt(questions.addRole).then(function(answers) {
		let newRole = {
			title: answers.role,
			salary: answers.salary,
			department: answers.department
		};
		const query = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
		connection.query(query, [ newRole.title, newRole.salary, newRole.department ], function(err) {
			if (err) throw err;
			console.log('\n ----------------------------------------\n');
			viewRoles();
		});
	});
}

function removeRole() {
	inquirer.prompt(questions.deleteRole).then(function(answers) {
		const query = 'DELETE FROM roles WHERE title = ?';
		connection.query(query, [ answers.deleteR ], function(err) {
			if (err) throw err;
			console.log('\n ----------------------------------------\n');
			viewRoles();
		});
	});
}

function newEmployee() {
	inquirer.prompt(questions.addEmployee).then(function(answers) {
		let newEmployee = {
			firstName: answers.firstName,
			lastName: answers.lastName,
			role: answers.employeeRole,
			manager: answers.employeeManager
		};
		const query = 'INSERT INTO employee (first_name, last_name, role_id, is_manager) VALUES (?, ?, ?, ?)';
		connection.query(
			query,
			[ newEmployee.firstName, newEmployee.lastName, newEmployee.role, newEmployee.manager ],
			function(err) {
				if (err) throw err;
				console.log('\n ----------------------------------------\n');
				viewemployee();
			}
		);
	});
}

function removeEmployee() {
	inquirer.prompt(questions.removeEmp).then(function(answers) {
		let firstName = answers.firstName;
		let lastName = answers.lastName;
		const query = 'DELETE FROM employee WHERE first_name = ? AND last_name = ?';
		connection.query(query, [ firstName, lastName ], function(err) {
			if (err) throw err;
			console.log('\n ----------------------------------------\n');
			viewemployee();
		});
	});
}

function updateRole() {
	inquirer.prompt(questions.updateRole).then(function(answers) {
		let updatedRole = answers.updateRole;
		let firstName = answers.firstName;
		let lastName = answers.lastName;

		const query = 'UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?';
		connection.query(query, [ updatedRole, firstName, lastName ], function(err) {
			if (err) throw err;
			console.log('\n ----------------------------------------\n');
			viewemployee();
		});
	});
}
