const fs = require("fs");
const inquirer = require("inquirer");

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
      message: "What is the title of your project?",
      name: "title",
    },
    {
      message: "Please add a description of your project",
      name: "description",
    },
    {
      message: "Please provide installation instructions",
      name: "installationInstructions",
    },
    {
      message: "Please include some usage information",
      name: "usageInfo",
    },
    {
      message: "Add your contribution guidelines here",
      name: "contributionGuidelines",
    },
    {
      message: "And finally provide some test instructions",
      name: "testInstructions",
    },
  ]);
}

generateReadMe();
