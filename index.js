const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const createhtml = require("./src/createhtml");
const team = [];


start = () => {
    // Initial prompt asking them to add members to their team
    inquirer.prompt(
        {
            type: "list",
            name: "select",
            message: "What would you like to do?",
            choices: ["Add Manager", "Add Engineer", "Add Intern", "Create HTML"]

        }).then((choice) => {
            switch (choice.select) {
                case "Add Manager":
                    createManager();
                    break;
                case "Add Engineer":
                    createEngineer();
                    break;
                case "Add Intern":
                    createIntern();
                    break;
                case "Create HTML":
                    generatehtml();
                    break;
            };
        });

    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the manager's name",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a name."
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's id?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter an ID."
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
                validate: data => {
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    }
                    return "Please enter a valid email address."
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid office number."
                }
            }
        ]).then((answers) => {
            const manager = new Manager(
                answers.name, 
                answers.id,
                answers.email,
                answers.officeNumber
            );
            team.push(manager);
            start();
        });
    };

    createEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Engineer's name?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Must enter a valid name"}
            },
            {
                type: "input",
                name: "id",
                message: "Enter the ID number of your Engineer?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Must enter a valid id"}
            },
            {
                type: "input",
                name: "email",
                message: "What is the email address of your Engineer?",
                validate: data => {
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    } 
                    return "You must enter a valid email address"
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is the github username of your Engineer?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Must enter a valid github username"}
            },
        ]).then((answers) => {
            const engineer = new Engineer(
                answers.name, 
                answers.id,
                answers.email,
                answers.github
            );
            team.push(engineer);
            start();
        });   
    };

    createIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your intern's name?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid name"}
            },
            {
                type: "input",
                name: "id",
                message: "What is your intern's id number?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid id"}
            },
            {
                type: "input",
                name: "email",
                message: "What is your intern's email address?",
                validate: data => {
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    } 
                    return "Please enter a valid email address"
                }
            },
            {
                type: "input",
                name: "school",
                message: "What school does your intern attend?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid school name"}
            },
        ]).then((answers) => {
            const intern = new Intern(
                answers.name, 
                answers.id,
                answers.email,
                answers.school
            );
            team.push(intern);
            start();
            
        });
    };

    generatehtml = () => {
        const html = createhtml(team);
        fs.writeFileSync('./dist/team.html', html);
        console.log("Your document 'team.html' has been created successfully.")
    };
}

start();