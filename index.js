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
  ]);
}

generateReadMe();
