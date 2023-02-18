// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?", 
        name: "title",
    },
    {
        type: "input",
        message: "Please enter a description of your application here:",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide installation instructions for your application:",
        name: "installation",
    },
    {
        type: "input",
        message: "Please provide information about your application's usage here:",
        name: "usage",
    },
    {
        type: "input",
        message: "Please provide guidelines for contributions to your project here:",
        name: "contributing",
    },
    {
        type: "input",
        message: "Please provide test instructions for your application here:",
        name: "tests"
    },
    {
        type: "checkbox",
        message: "Please choose a license for your application from the following options:",
        name: "license",
        choices: ["gnu", "mit", "mozilla"],
    }
     ];

inquirer
.prompt(questions);

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
