const inquirer = require("inquirer");
const pool = require("./server.js");
const { UPDATE } = require("sequelize/lib/query-types");
//department queries
async function viewAllDepartments() {
  try {
    const res = await pool.query("SELECT * FROM department_table");
    console.table(res.rows);
  } catch (err) {
    console.error(err.message);
  }
}
//department queries
async function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "Enter the name of the new Department",
    })
    .then(async (answer) => {
      try {
        const res = await pool.query(
          "INSERT INTO department_table (name) VALUES ($1) RETURNING *",
          [answer.name]
        );
        console.log(`Added department: ${res.rows[0].name}`);
      } catch (err) {
        console.error(err.message);
      }
      mainMenu();
    });
}
//role queries
async function viewAllRoles() {
  try {
    const res = await pool.query("SELECT * FROM role_table");
    console.table(res.rows);
  } catch (err) {
    console.error(err.message);
  }
}
//role queries
async function addRoles() {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "Enter the name of the new Role",
    })
    .then(async (answer) => {
      try {
        const res = await pool.query(
          "INSERT INTO role_table (name) VALUES ($1) RETURNING *",
          [answer.name]
        );
        console.log(`Added role: ${res.rows[0].name}`);
      } catch (err) {
        console.error(err.message);
      }
      mainMenu();
    });
}
//employee queries
async function viewAllEmployees() {
  try {
    const res = await pool.query("SELECT * FROM employee_names");
    console.table(res.rows);
  } catch (err) {
    console.error(err.message);
  }
}
async function addEmployees() {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "Enter the name of the new Employee",
    })
    .then(async (answer) => {
      try {
        const res = await pool.query(
          "INSERT INTO employee_table (name) VALUES ($1) RETURNING *",
          [answer.name]
        );
        console.log(`Added Employee: ${res.rows[0].name}`);
      } catch (err) {
        console.error(err.message);
      }
      mainMenu();
    });
}
//manager queries
async function viewAllManagers() {
  try {
    const res = await pool.query("SELECT * FROM manager_names");
    console.table(res.rows);
  } catch (err) {
    console.error(err.message);
  }
}
//manager queries
async function addManagers() {
  try {
    const answer = await inquirer.prompt({
      type: "input",
      name: "name",
      message: "Enter the name of the new Manager",
    });

    const res = await pool.query(
      "INSERT INTO manager_names (name) VALUES ($1) RETURNING *",
      [answer.name]
    );
    console.log(`Added Manager: ${res.rows[0].name}`);
  } catch (err) {
    console.error(err.message);
  } finally {
    mainMenu();
  }
}

async function updateEmployeeRole() {
  let choices = await pool.query("SELECT * FROM role_table")
console.log(choices)
  let mappedChoices = choices.rows.map( row => {

    return row
  })
  try {
    const answer = await inquirer.prompt({
    //   type: "input",
    //   name: "updatedRole",
    //   message: "Enter the updated Role",
    // },
      type: "list",
      name: "targetRole",
      message: "Select role to update",
      choices: [mappedChoices]
    })

    const answer2 = await pool.query(
      "UPDATE role_table SET title = ($1) WHERE title = ($2)",[answer.updateRole, answer.targetRole]
    );
  } catch (err) {
    console.error(err.message);
  } finally {
    mainMenu();
  }
}

function mainMenu() {
  inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "View All Managers",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Add a Manager",
        "Update an Employee Role",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "View All Departments":
          viewAllDepartments();
          break;
        case "Add a Department":
          addDepartment();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add a Role":
          addRoles();
          break;
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add an Employee":
          addEmployees();
          break;
        case "View All Managers":
          viewAllManagers();
          break;
        case "Add a Manager":
          addManagers();
          break;
        case "Update an Employee Role":
          updateEmployeeRole();
          break;
        case "Exit":
          pool.end();
          console.log("Goodbye!");
          break;
        default:
          break;
      }
    });
}

mainMenu();
