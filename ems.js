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
                "View Departments",
                "View Roles",
                "Add Employee",
                "Add Role",
                "Add Department",
                "Remove Employee",
                "Remove Role",
                "Remove Department",
                "Update Employee Role",
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

                case "View Departments":
                    viewDepartments();
                    break;

                case "View Roles":
                    viewRoles();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Add Department":
                    addDepartment();
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

                case "Exit":
                    connection.end();
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
                message: "Please select department.",
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

function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        { console.table(res) };
        promptUser();
    });
}

function viewRoles() {
    var query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        { console.table(res) };
        promptUser();
    });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstName",
                message: "What is the employee's first name?",
            },
            {
                type: "input",
                name: "lastName",
                message: "What is the employee's last name?",
            },
            {
                type: "list",
                name: "employeeRole",
                message: "What is the employee's role?",
                choices: ["Software Engineer", "Claims Lawyer", "Sales Manager", "Marketing Lead", "Human Resources Director", "Accountant", "Support Desk Manager", "Data Engineer", "Account Manager"]
            }
        ])
        .then(function (answer) {
            if (answer.employeeRole === "Software Engineer")
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: 1
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your employee was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRole === "Claims Lawyer")
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: 2
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your employee was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRole === "Sales Manager")
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: 3
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your employee was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRole === "Marketing Lead")
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: 4
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your employee was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRole === "Human Resources Director")
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: 5
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your employee was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRole === "Accountant")
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: 6
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your employee was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRole === "Support Desk Manager")
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: 7
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your employee was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRole === "Data Engineer")
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: 8
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your employee was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRole === "Account Manager")
                connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: 9
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your employee was created successfully!");
                        promptUser();
                    }
                );
        });

}

function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "roleTitle",
                message: "Please enter the new role title.",
            },
            {
                type: "input",
                name: "roleSalary",
                message: "What is the new role salary?",
            },
            {
                type: "list",
                name: "roleDepartment",
                message: "Please enter the department for the new role.",
                choices: ["Engineering", "Legal", "Sales", "Marketing", "Human Resources", "Finance", "Information Technology"]
            }
        ])
        .then(function (answer) {
            if (answer.roleDepartment === "Engineering")
                connection.query(
                    "INSERT INTO role SET ?",
                    {
                        title: answer.roleTitle,
                        salary: answer.roleSalary,
                        department_id: 1
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your role was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.roleDepartment === "Legal")
                connection.query(
                    "INSERT INTO role SET ?",
                    {
                        title: answer.roleTitle,
                        salary: answer.roleSalary,
                        department_id: 2
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your role was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.roleDepartment === "Sales")
                connection.query(
                    "INSERT INTO role SET ?",
                    {
                        title: answer.roleTitle,
                        salary: answer.roleSalary,
                        department_id: 3
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your role was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.roleDepartment === "Marketing")
                connection.query(
                    "INSERT INTO role SET ?",
                    {
                        title: answer.roleTitle,
                        salary: answer.roleSalary,
                        department_id: 4
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your role was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.roleDepartment === "Human Resources")
                connection.query(
                    "INSERT INTO role SET ?",
                    {
                        title: answer.roleTitle,
                        salary: answer.roleSalary,
                        department_id: 5
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your role was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.roleDepartment === "Finance")
                connection.query(
                    "INSERT INTO role SET ?",
                    {
                        title: answer.roleTitle,
                        salary: answer.roleSalary,
                        department_id: 6
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your role was created successfully!");
                        promptUser();
                    }
                );
            else if (answer.roleDepartment === "Information Technology")
                connection.query(
                    "INSERT INTO role SET ?",
                    {
                        title: answer.roleTitle,
                        salary: answer.roleSalary,
                        department_id: 7
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("Your role was created successfully!");
                        promptUser();
                    }
                );
        });
}

function addDepartment() {
    inquirer
        .prompt(
            {
                type: "input",
                name: "newDepartmentName",
                message: "Please enter the name of the new department.",
            },
        )
        .then(function (answer) {
            connection.query(
                "INSERT INTO department SET ?",
                {
                    name: answer.newDepartmentName,
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your new department was created successfully!");
                    promptUser();
                }
            );
        });
}

function removeEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstNameDeleteEmployee",
                message: "What is the employee's first name?",
            },
            {
                type: "input",
                name: "lastNameDeleteEmployee",
                message: "What is the employee's last name?",
            },
        ])
        .then(function (answer) {
            connection.query(
                "DELETE FROM employee WHERE first_name = ? and last_name = ?", [answer.firstNameDeleteEmployee, answer.lastNameDeleteEmployee],
                function (err) {
                    if (err) throw err;
                    console.log("The employee was deleted successfully!");
                    promptUser();
                }
            );
        });
}

function removeRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "removeRole",
                message: "Which role would you like to remove?",
            },
        ])
        .then(function (answer) {
            connection.query(
                "DELETE FROM role WHERE title = ?", [answer.removeRole],
                function (err) {
                    if (err) throw err;
                    console.log("The role was deleted successfully!");
                    promptUser();
                }
            );
        });
}

function removeDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "removeDepartment",
                message: "Which department would you like to remove?",
            },
        ])
        .then(function (answer) {
            connection.query(
                "DELETE FROM department WHERE name = ?", [answer.removeDepartment],
                function (err) {
                    if (err) throw err;
                    console.log("The department was deleted successfully!");
                    promptUser();
                }
            );
        });
}

function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstNameUpdateRole",
                message: "What is the employee's first name?",
            },
            {
                type: "input",
                name: "lastNameUpdateRole",
                message: "What is the employee's last name?",
            },
            {
                type: "list",
                name: "employeeRoleUpdate",
                message: "What is the employee's new role?",
                choices: ["Software Engineer", "Claims Lawyer", "Sales Manager", "Marketing Lead", "Human Resources Director", "Accountant", "Support Desk Manager", "Data Engineer", "Account Manager"]
            }
        ])
        .then(function (answer) {
            if (answer.employeeRoleUpdate === "Software Engineer")
                connection.query(
                    "UPDATE employee SET role_id = 1 WHERE first_name = ? and last_name = ?", [answer.firstNameUpdateRole, answer.lastNameUpdateRole],
                    function (err) {
                        if (err) throw err;
                        console.log("The employee was updated successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRoleUpdate === "Claims Lawyer")
                connection.query(
                    "UPDATE employee SET role_id = 2 WHERE first_name = ? and last_name = ?", [answer.firstNameUpdateRole, answer.lastNameUpdateRole],
                    function (err) {
                        if (err) throw err;
                        console.log("The employee was updated successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRoleUpdate === "Sales Manager")
                connection.query(
                    "UPDATE employee SET role_id = 3 WHERE first_name = ? and last_name = ?", [answer.firstNameUpdateRole, answer.lastNameUpdateRole],
                    function (err) {
                        if (err) throw err;
                        console.log("The employee was updated successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRoleUpdate === "Marketing Lead")
                connection.query(
                    "UPDATE employee SET role_id = 4 WHERE first_name = ? and last_name = ?", [answer.firstNameUpdateRole, answer.lastNameUpdateRole],
                    function (err) {
                        if (err) throw err;
                        console.log("The employee was updated successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRoleUpdate === "Human Resources Director")
                connection.query(
                    "UPDATE employee SET role_id = 5 WHERE first_name = ? and last_name = ?", [answer.firstNameUpdateRole, answer.lastNameUpdateRole],
                    function (err) {
                        if (err) throw err;
                        console.log("The employee was updated successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRoleUpdate === "Accountant")
                connection.query(
                    "UPDATE employee SET role_id = 6 WHERE first_name = ? and last_name = ?", [answer.firstNameUpdateRole, answer.lastNameUpdateRole],
                    function (err) {
                        if (err) throw err;
                        console.log("The employee was updated successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRoleUpdate === "Support Desk Manager")
                connection.query(
                    "UPDATE employee SET role_id = 7 WHERE first_name = ? and last_name = ?", [answer.firstNameUpdateRole, answer.lastNameUpdateRole],
                    function (err) {
                        if (err) throw err;
                        console.log("The employee was updated successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRoleUpdate === "Data Engineer")
                connection.query(
                    "UPDATE employee SET role_id = 8 WHERE first_name = ? and last_name = ?", [answer.firstNameUpdateRole, answer.lastNameUpdateRole],
                    function (err) {
                        if (err) throw err;
                        console.log("The employee was updated successfully!");
                        promptUser();
                    }
                );
            else if (answer.employeeRoleUpdate === "Account Manager")
                connection.query(
                    "UPDATE employee SET role_id = 9 WHERE first_name = ? and last_name = ?", [answer.firstNameUpdateRole, answer.lastNameUpdateRole],
                    function (err) {
                        if (err) throw err;
                        console.log("The employee was updated successfully!");
                        promptUser();
                    }
                );
        });
}
