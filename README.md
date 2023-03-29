# Teammate Profile Generator

## Table of Contents

* [Description](#description)
* [Code Examples](#code-examples)
* [Important links](#important-links)
* [Questions](#questions)

## Description

The purpose of this project was to create an Employee Profile generator that can be used to enter/store employee data including name, office number, contact information and personnel number.


## Code Examples
Example of Code used to create prompts:

```js
return inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message:"What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
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
        }])
```
Example of Code used to create tests.

```js
test ('creates an intern object', () => {
    const intern = new Intern('Jose Sanchez', '0000', 'test@gmail.com', 'College');
    expect(intern.name).toBe('Jose Sanchez');
    expect(intern.id).toBe('0000');
    expect(intern.email).toBe('test@gmail.com');
    expect(intern.school).toBe('College');
});
```

## Important Links
[GitHub Repository](https://github.com/keekerr/Team-Profile-Generator)

[Video Walk Through of Application](https://drive.google.com/file/d/1xZRh37fxNXvQjTyHujb9Fs3ckZNhzoRS/view)

## Questions

If you have any questions regarding this project, please feel free to contact me at this email: keeley.s.sprouse@gmail.com

Other examples of projects I have worked on can be viewed on Github via this link: [keekerr](https://github.com/keekerr)
