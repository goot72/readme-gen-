// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");
const { isFunction } = require("util");
const { error } = require("console");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage information for your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines for your project?",
        name: "contribution"

    },
    {
        type: "input",
        message: "What are the test instructions for your project?",
        name: "test"
    },

];
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage information for your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines for your project?",
        name: "contribution"

    },
    {
        type: "input",
        message: "What are the test instructions for your project?",
        name: "test"
    },
    {
        type: "list",
        message: "What license would you like to use?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]

    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },

]
).then(({
    title,
    description,
    installation,
    usage,
    contribution,
    test,
    license,
    username,
    email,
})=>{
const template = `# ${title}
* [title](#title)
* [description](#description)
* [installation](#installation)
* [usage](#usage)
* [contribution](#contribution)
* [test](#test)
* [license](#license)
* [username](#username)
* [email](#email)

## Description
${description}

## Installation
${installation}

## usage
${usage}

## Contribution
${contribution}

## Test
${test}

## License
${license}

## Contact
* Git :${username}
* Email :${email}`;

createNewFile(title,template);
     
}
);
function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(" ").join("")}.md`, data,()=>{
        if(error){
            console.log(error);
        }
        console.log("Your README has been generated");
    })
}


// console.log(html); 
// fs.writeFileSync("readmeGenerator.md",markDown);s
// })
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {



// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

