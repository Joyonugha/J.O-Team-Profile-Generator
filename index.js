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
   
   // Function to initialize the application and add team manager's information
   function init() {
    let teamMembers = [];

    const addManager = () => {
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'managerName',
              message: "Please enter your Team Manager's Name:",
            },
            {
              type: 'input',
              name: 'managerId',
              message: "Please enter yourTeam Manager's Employee ID:",
            },
            {
              type: 'input',
              name: 'managerEmail',
              message: "Please enter your Team Manager's Email Address:",
              validate: function(value) {
                var pass = value.match(
                  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/i
                );
                if (pass) {
                  return true;
                }
                return 'Please enter a valid email address.';
              },
            },
            {
              type: 'input',
              name: 'managerOfficeNumber',
              message: "Please enter your Team Manager's Office Number:",
            },
        ]) //This function adds the answers
        .then((answers) => {
          const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
          teamMembers.push(manager);
          addTeamMember();
        });
   };
   const addTeamMember = () => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'addMember',
          message: 'Which type of team member would you like to add?',
          choices: ['Engineer', 'Intern', 'Finish building the team'],
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