var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    // Port
    port: 3306,

    // Username
    user: "root",

    // PW
    password: "Tmp1990!!!!",
    database: "employee_management_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    promptUser();
});

function promptUser() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    // viewEmployees();
                    break;

                case "View All Employees By Department":
                    // viewEmployeesByDep();
                    break;

                case "View All Employees By Manager":
                    // viewEmployeesByManager();
                    break;

                case "Add Employee":
                    // addEmployee();
                    break;

                case "Remove Employee":
                    // removeEmployee();
                    break;

                case "Update Employee Role":
                    // updateEmployeeRole();
                    break;

                case "Update Employee Manager":
                    // updateEmployeeManager();
                    break;
            }
        });
}