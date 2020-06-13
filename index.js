const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

async function generateReadMe() {
  const {
    title,
    description,
    installationInstructions,
    usageInfo,
    contributionGuidelines,
    testInstructions,
  } = await inquirer.prompt([
    {
      type: "input",
      message: "Hello, what is your GitHub username?",
      name: "github",
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
      message: "Add your contribution guidelines here:",
      name: "contributionGuidelines",
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
  ]);
}
