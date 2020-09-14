const initialQuest = [
	{
        name: 'what',
		type: 'list',
		message: 'What would you like to do?',
		choices: [
			'view employees',
			'view roles',
			'view departments',
			'add employee',
			'add role',
			'add department',
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
        name:"department",
        type:"input",
        message: "",

    }

]