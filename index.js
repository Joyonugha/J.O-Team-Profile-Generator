const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// This Function writes the HTML to a file (ref: previous readme challenge I did)
const writeToFile = (html) => {
    const outputPath = path.resolve(__dirname, 'output', 'team.html');
    fs.writeFile(outputPath, html, (err) => {
       if (err) throw err;
       console.log('You have successfully saved your file!');
    });
   };
   
   // Function to initialize the application
   function init() {
    let teamMembers = [];

    const addTeamMember = () => {
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'addMember',
              message: 'Please enter your team manager name?',
              choices: ['Engineer', 'Intern', 'Team Manager'],
            },
          ])
          .then((answers) => {
            if (answers.addMember === 'Engineer') {
              addEngineer();
            } else if (answers.addMember === 'Intern') {
              addIntern();
            } else {
              finishBuilding();
            }
          });
     }};
     const addEngineer = () => {
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'engineerName',
              message: "Engineer's Name:",
            },
            {
              type: 'input',
              name: 'engineerId',
              message: "Engineer's ID:",
            },
            {
              type: 'input',
              name: 'engineerEmail',
              message: "Engineer's Email:",
            },
            {
              type: 'input',
              name: 'engineerGithub',
              message: "Engineer's GitHub username:",
            },
          ])
          .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            addTeamMember();
          });
     };