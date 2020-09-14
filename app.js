const mysql = require("mysql");
const inquirer = require("inquirer");

//create connection to mysql db
const connection = mysql.createConnection({
    host: "locatlhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_data"
})


connection.connect((err) => {
    if (err) throw err;
  });