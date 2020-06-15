const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  {
    type: "input",
    message: "Hello, what is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is the URL of your project site?",
    name: "urlSite",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },

  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please add a description of your project:",
    name: "description",
  },
  {
    message: "Please provide installation instructions:",
    name: "installationInstructions",
  },
  {
    type: "input",
    message: "Please include some usage information:",
    name: "usageInfo",
  },
  {
    type: "input",
    message: "Add your contributions here:",
    name: "contributions",
  },
  {
    type: "input",
    message: "Provide some test instructions:",
    name: "testInstructions",
  },
  {
    type: "list",
    message: "Choose a license from the following list:",
    choices: ["Apache", "MIT", "GNU GPLv3", "ISC"],
    name: "license",
  },
];

function userOutput() {
  return inquirer.prompt(questions);
}

async function init() {
  try {
    const userInput = await userOutput();

    const readMeFile = generateMarkdown(userInput);

    await writeFileAsync("README.md", readMeFile);

    console.log("Success, you wrote a README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
