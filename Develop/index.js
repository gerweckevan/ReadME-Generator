const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user or a function that crates array
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the project name?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a description of your project",
      name: "description",
    },
    {
      type: "input",
      message:
        "What are the installation directions. Write NONE if not applicable",
      name: "installation",
    },
    {
      type: "input",
      message: "How would you like for your application to be used?",
      name: "usage",
    },
    {
      type: "input",
      message: "Who contributed on this project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "What are the Test Instructions",
      name: "test",
    },
    {
      type: "checkbox",
      message: "Please select a license for your page",
      choices: ["Apache", "MIT", "ISC", "GNU GPLv3"],
      name: "license",
    },
    {
      type: "input",
      message: "Whose Credit is this work?",
      name: "credit",
    },
    {
      type: "input",
      message: "What is your GitHub username",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address",
      name: "email",
    },
  ]);
}

// function to generate markdown for README
function generateMarkdown(response) {
  return `
    # ${response.title}
    # Table of Contents
    
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contruibting](#contributing)
    - [Test](#test)
    - [Credits](#credits)
    - [Licence](#licence)
    - [Questions](#questions)
  
  ![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")
  
      ${response.description}
    ## Installation:
      ${response.installation}
    ## Usage:
      ${response.usage}
    ## Contributing:
      ${response.contribution}
    ## Test
      ${response.test}
    ## Credits:
      ${response.credit}
    ## License:
      For more info about this licence, you can click the link below.
    - [License](https://opensource.org/licenses/${response.license})
    
    ## Questions:
      For questions about the Generator,
      feel free to visit my GitHub page at the following link:
    - [GitHub Profile](https://github.com/${response.username})
  
    For any comments questions or concerns reach out to my email at: ${response.email}
  `;
}

module.exports = generateMarkdown;
// const questions = [

// ];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
async function init() {
  try {
    const response = await promptUser();
    const readMe = generateMarkdown(response);
    await writeFileAsync("README.md", readMe);
    console.log("SUCCESS!");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
