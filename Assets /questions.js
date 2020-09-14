const initialQ = [
	{
        name: 'what',
		type: 'list',
		message: 'What would you like to do?',
		choices: [
			'view employees',
			'view roles',
			'view departments',
			'add employee',
			'Add Role',
			'Add Department',
			'update employee role',
			'EXIT'
		]
	}
];



const addDepart = [
    {
        name: "department",
        type: "input",
        message: "What departmnet do you wish to add?",
    }
]

const addRole = [
    {
        name: "role",
        type:"input",
        message: "What type of role would you like to add?",
    },

    {
        name:"salary",
        type:"input",
        message: "What is teh salary of this role?",

    },

    {
        name:"newDepartment",
        type:"input",
        message: "",

    }

]

const addEmployee = [
    {
        name: "firstName",
        type: "input",
        message: "What is the employee's first name?"
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the employee's last name?"
      },
      {
        name: "employeeRole",
        type: "input",
        message: "What is the employee's role id number?",
      },
      {
        name: "employeeManager",
        type: "input",
        message: "What is the employee's manager id number?",
      }
]


const updateRole =
    [
        {
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?"
          },
          {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?"
          },
          {
            name: "updateRole",
            type: "input",
            message: "What is the id of the role this employee will have ?"
          },
    ]

    module.exports = {

        initialQ,
        addDepart,
        addRole,
        addEmployee,
        updateRole
    }