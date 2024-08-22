const inquirer = require('inquirer');
const pool = require('./server');

async function viewAllDepartments() {
    try {
      const res = await pool.query('SELECT * FROM department_table');
      console.table(res.rows);
    } catch (err) {
      console.error(err.message);
    } finally {
      mainMenu(); // Return to main menu after operation
    }
  }
  
  // Function to add a department
  async function addDepartment() {
    inquirer
      .prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the name of the new department:',
      })
      .then(async (answer) => {
        try {
          const res = await pool.query('INSERT INTO department_table (name) VALUES ($1) RETURNING *', [answer.name]);
          console.log(`Added department: ${res.rows[0].name}`);
        } catch (err) {
          console.error(err.message);
        } finally {
          mainMenu(); // Return to main menu after operation
        }
      });
  }