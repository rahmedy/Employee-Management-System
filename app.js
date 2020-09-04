const mysql = require("mysql");
const inquirer = require("inquirer");

//create connection to mysql db
const connection = mysql.createConnection ({
    host: "locatlhost",
    port: 3306,
    user: "root",
    password: "Ht208476",
    database: "employee_DB"
})