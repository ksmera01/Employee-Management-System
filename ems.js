var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');
require('dotenv').config();

var connection = mysql.createConnection({
    host: "localhost",

    // Port
    port: 3306,

    // Username
    user: "root",

    // PW
    password: process.env.DB_PASSWORD,
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
                "Remove Role",
                "Remove Department",
                "Update Employee Role",
                "Update Employee Manager",
                "View Total Utilized Budget by Department",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;

                case "View All Employees By Department":
                    viewEmployeesByDep();
                    break;

                case "View All Employees By Manager":
                    viewEmployeesByManager();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Remove Employee":
                    removeEmployee();
                    break;

                case "Remove Role":
                    removeRole();
                    break;

                case "Remove Department":
                    removeDepartment();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;

                case "View Total Utilized Budget by Department":
                    viewBudget();
                    break;

                case "View Total Utilized Budget by Department":
                    end();
                    break;
            }
        });
}

function viewEmployees() {
    var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department ";
    query += "FROM employee LEFT JOIN role ON employee.role_id = role.id ";
    query += "LEFT JOIN department ON role.department_id = department.id";
    connection.query(query, function (err, res) {
        if (err) throw err;
        { console.table(res) };
        promptUser();
    });
}

function viewEmployeesByDep() {
    inquirer
        .prompt(
            {
                type: "list",
                name: "depChoice",
                message: "Please select department",
                choices: ["Engineering", "Legal", "Sales", "Marketing", "Human Resources", "Finance", "Information Technology"]
            }
        ).then(function (answer) {
            if (answer.depChoice === "Engineering") {
                var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department ";
                query += "FROM employee LEFT JOIN role ON employee.role_id = role.id ";
                query += "LEFT JOIN department ON role.department_id = department.id WHERE department.id = 1 ";
                connection.query(query, function (err, res) {
                    if (err) throw err;
                    { console.table(res) };
                    promptUser();
                });
            }
            else if (answer.depChoice === "Legal") {
                var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department ";
                query += "FROM employee LEFT JOIN role ON employee.role_id = role.id ";
                query += "LEFT JOIN department ON role.department_id = department.id WHERE department.id = 2";
                connection.query(query, function (err, res) {
                    if (err) throw err;
                    { console.table(res) };
                    promptUser();
                });
            }
            else if (answer.depChoice === "Sales") {
                var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department ";
                query += "FROM employee LEFT JOIN role ON employee.role_id = role.id ";
                query += "LEFT JOIN department ON role.department_id = department.id WHERE department.id = 3";
                connection.query(query, function (err, res) {
                    if (err) throw err;
                    { console.table(res) };
                    promptUser();
                });
            }
            else if (answer.depChoice === "Marketing") {
                var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department ";
                query += "FROM employee LEFT JOIN role ON employee.role_id = role.id ";
                query += "LEFT JOIN department ON role.department_id = department.id WHERE department.id = 4";
                connection.query(query, function (err, res) {
                    if (err) throw err;
                    { console.table(res) };
                    promptUser();
                });
            }
            else if (answer.depChoice === "Human Resources") {
                var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department ";
                query += "FROM employee LEFT JOIN role ON employee.role_id = role.id ";
                query += "LEFT JOIN department ON role.department_id = department.id WHERE department.id = 5";
                connection.query(query, function (err, res) {
                    if (err) throw err;
                    { console.table(res) };
                    promptUser();
                });
            }
            else if (answer.depChoice === "Finance") {
                var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department ";
                query += "FROM employee LEFT JOIN role ON employee.role_id = role.id ";
                query += "LEFT JOIN department ON role.department_id = department.id WHERE department.id = 6";
                connection.query(query, function (err, res) {
                    if (err) throw err;
                    { console.table(res) };
                    promptUser();
                });
            }
            else if (answer.depChoice === "Information Technology") {
                var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department ";
                query += "FROM employee LEFT JOIN role ON employee.role_id = role.id ";
                query += "LEFT JOIN department ON role.department_id = department.id WHERE department.id = 7";
                connection.query(query, function (err, res) {
                    if (err) throw err;
                    { console.table(res) };
                    promptUser();
                });
            }
        })
}



