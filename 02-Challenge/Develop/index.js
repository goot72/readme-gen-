// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
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
    


]).then((data) =>{
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
    <title>Document</title>
    <style>
        main{
            justify-content: center;
            
            padding-bottom: 10px;
            font-size: 36px;
        }
    </style>
</head>
<body>
<header>
    <h1>license: ${data.license}</h1>
    <main>
        <section>
            # ${data.title} 
        </section>
       <section>
       ## Description
        </section>
        <section>
        ${data.description}
        </section>
         <section>
         ## Installation
         </section>
        <section>
        ${data.installation}
        </section>
        <section>
        Usage
         </section>
        <section>
        ## ${data.usage}
        </section>
        <section>
        ## Contribution
         </section>
        <section>
        ${data.contribution}
        </section>
        <section>
        ## Test
         </section>
        <section>
        ${data.test}
        </section>
       <section>
       ## Questions
        </section>
        <section>
        GitHub Username: ${data.username}
        </section>
        <section>
        Email: ${data.email}
        </section>
        

    </main>
</body>
</html>`; 

console.log(html); 
fs.writeFileSync("readmeGenerator.html",html);
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {



}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

