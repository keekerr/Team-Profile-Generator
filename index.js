// source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
// source: https://stackoverflow.com/questions/25590682/javascript-redirect-if-validation-success-otherwise-stay-on-the-same-page

const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateCards = require('./src/page-template.js');
const writeFile = require('./src/generate-site')

const Prompt = () => {
    const manager = [];
    const engineer = [];
    const intern = [];

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message:"What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type:'text',
            name: 'employee',
            message: "What is the Employee's name?"
        },
        {
            type:'text',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?"
        },
    ])
        .then(({employee, id, email, role}) => {
            if (role === 'Manager') {
                return inquirer.prompt([
                    {
                        type:'integer',
                        name: 'office',
                        message:"Enter your employee's office number",
                        validate: officeNumber => {
                            if (officeNumber) {
                                return true;
                            }else {
                                return dalse;
                            }
                        },
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Do you need to add another employee?",
                        default: false,
                    },
                ])
                .then(({office, anotherEntry}) =>{
                    manager.push(new Manager(employee, id, email, office));
                    if(anotherEntry) {
                        return Prompt();
                    }
                });
            } else if (role === 'Engineer') {
                return inquirer.prompt([
                    {
                        type: 'text',
                        name: 'github',
                        message: 'Enter Github Username',
                        validate: githubUsername => {
                            if (githubUsername) {
                                return true;
                            }else {
                                return dalse;
                            }
                        },
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Do you need to add another employee?",
                        default: false,
                    },
                ])
                .then(({office, anotherEntry}) =>{
                    engineer.push(new Engineer(employee, id, email, github));
                    if(anotherEntry) {
                        return Prompt();
                    }
                });
            } else if (role === 'Intern') {
                return inquirer.prompt([
                    {
                        type: 'text',
                        name: 'university',
                        message: "Enter the name of the Intern's University",
                        validate: universityName => {
                            if (universityName) {
                                return true;
                            }else {
                                return dalse;
                            }
                        },
                    },
                ])
                .then(({university, anotherEntry}) =>{
                    engineer.push(new Intern(employee, id, email, university));
                    if(anotherEntry) {
                        return Prompt();
                    }
                });
            }
        }) 
        .then(() => ({ manager, engineer, intern}));
};

Prompt()
    .then(({ manager, engineer, intern}) => {
        const employeeArr = [...manager, ...engineer, ...intern];
        return generatePage(employeeArr);
    })
    .then((pageHTML) => {
        return writeFile(pageHTML);
    })
 
    // Prompt()
    // .then((teamData) => {
    //   const employeeArr = []; 
    //   return generatePage(employeeArr);
    // })
    // .then((pageHTML) => {
    //   return writeFile(pageHTML);
    // });
       