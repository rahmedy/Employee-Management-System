const mysql = require("mysql");
const inquirer = require("inquirer");
const questions = require("./assets/questions.js")
const table = require("console.table");

console.log('\n', "<-----------------------------Welcome to Your Employee Database--------------------------------------->", '\n')

//create connection to mysql db
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Ht208476',
	database: 'employee_data'
});

connection.connect(function (err) {
	if (err) throw err;
	init();
});



//  <---Begins inital questions -----> //
function init() {
	inquirer.prompt(questions.initialQ).then(function (answer) {
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

};

function viewRoles() {
	const query =
		'SELECT roles.department_id, roles.title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id';
	connection.query(query, (err, res) => {
		if (err) throw err;
		console.log('\n ------------------------------------------------------------------------\n');
		console.table(res);
		init();

	});
};

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
};

function addDepartment() {
	inquirer
		.prompt([{
			name: "newDepartment",
			type: "input",
			message: "What department would you like to add?"
		}, ])
		.then(function (answers) {
			const newDepartment = answers.newDepartment;
			var query = "INSERT INTO departments (id, department_name) VALUES (?,?)";
			connection.query(query, newDepartment, function (err) {
				if (err) throw err;
				console.log("\n ----------------------------------------\n");
				viewDepartments();
			});
		});


};

function newRole() {
	inquirer
		.prompt([{
				name: "newRole",
				type: "input",
				message: "What role would you like to add?"
			},
			{
				name: "salary",
				type: "input",
				message: "What is the salary for that role?"
			},
			{
				name: "department",
				type: "input",
				message: "What is the department's id for that role?"
			},
		])
		.then(function (answers) {
			let newRole = {
				title: answers.newRole,
				salary: answers.salary,
				department: answers.department
			}
			var query = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";
			connection.query(query, [newRole.title, newRole.salary, newRole.department], function (err) {
				if (err) throw err;
				console.log("\n ----------------------------------------\n");
				viewRoles();
			});
		});
}

// function newEmployee() {}

// function updateRole() {}