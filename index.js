const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

async function viewAllDepartments() {
    try {
        const res = await Pool.query('SELECT * FROM department_table');
        console.table(res.rows);
    } catch (err) {
        console.error(err.message);
    }
}

function mainMenu() {
    inquirer
      .prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Exit',
        ],
    })
    .then((answer) => {
        switch (answer.action) {
            case 'View All Departments':
              viewAllDepartments();
              break;
              case 'Exit':
                pool.end();
                console.log('Goodbye!');
                break;
              default:
                break;
            }
          });
      }
    
mainMenu();