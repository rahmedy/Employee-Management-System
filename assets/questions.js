const initialQ = [
	{
		name: 'what',
		type: 'list',
		message: 'What would you like to do?',
		choices: [
			'View Departments',
			'View Roles',
			'View Employees',
			'Add Department',
			'Delete Department',
			'Add Role',
			'Remove Role',
			'Add Employee',
			'Remove Employee',
			'Update Employee Role',
			'EXIT'
		]
	}
];

const addDepart = [
	{
		name: 'newDepartment',
		type: 'input',
		message: 'What departmnet do you wish to add?'
	}
];

const deleteDpar = [
	{
		name: 'delete',
		type: 'input',
		message: 'What departmnet would you like to delete'
	}
];

const addRole = [
	{
		name: 'role',
		type: 'input',
		message: 'What type of role would you like to add?'
	},

	{
		name: 'salary',
		type: 'input',
		message: 'What is the salary of this role?'
	},

	{
		name: 'department',
		type: 'input',
		message: 'What is the departments id for that role?'
	}
];

const addEmployee = [
	{
		name: 'firstName',
		type: 'input',
		message: "What is the employee's first name?"
	},
	{
		name: 'lastName',
		type: 'input',
		message: "What is the employee's last name?"
	},
	{
		name: 'employeeRole',
		type: 'input',
		message: "What is the employee's role id number?"
	},
	{
		name: 'employeeManager',
		type: 'input',
		message: "What is the employee's manager id number?"
	}
];

const removeEmp = [
	{
		name: 'firstName',
		type: 'input',
		message: "What is the employee's first name?"
	},
	{
		name: 'lastName',
		type: 'input',
		message: "What is the employee's last name?"
	}
];

const deleteRole = [
	{
		name: 'deleteR',
		type: 'input',
		message: 'What role would you like to remove?'
	}
];

const updateRole = [
	{
		name: 'firstName',
		type: 'input',
		message: "What is the employee's first name?"
	},
	{
		name: 'lastName',
		type: 'input',
		message: "What is the employee's last name?"
	},
	{
		name: 'updateRole',
		type: 'input',
		message: 'What is the id of the role this employee will have ?'
	}
];

module.exports = {
	initialQ,
	addDepart,
	deleteDpar,
	addRole,
	deleteRole,
	addEmployee,
	removeEmp,
	updateRole
};
