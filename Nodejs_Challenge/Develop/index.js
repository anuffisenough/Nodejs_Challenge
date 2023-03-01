// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
     ])
    .then((response) =>
        fs.writeFile("README.md",`# ${response.title}\n\n## Description\n${response.description}\n\n## Table of Contents\n-[Description](#description)\n\n-[Installation](#installation)\n\n-[Usage](#usage)\n\n-[License](#license)\n\n-[Contributing](#contributing)\n\n-[Tests](#tests)\n\n-[Questions](#questions)\n\n## Installation\n${response.installation}\n\n## Usage\n${response.usage}\n\n## License\n${response.choices}\n\n## Contributing\n${response.contributing}\n\n## Tests\n${response.tests}\n\n## Questions\n${response.questions}`, (err) =>
        err ? console.error(err) : console.log("success!"))
);

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
    
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
