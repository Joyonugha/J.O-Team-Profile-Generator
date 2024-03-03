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
// This Function writes the HTML to a file
const writeToFile = (html) => {
    const outputPath = path.resolve(__dirname, 'output', 'team.html');
    fs.writeFile(outputPath, html, (err) => {
       if (err) throw err;
       console.log('The file has been saved!');
    });
   };
   
   // Function to initialize the application
   function init() {
    let teamMembers = [];
