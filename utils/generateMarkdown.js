// function to generate markdown for README
function generateMarkdown(userInput) {
  return `# ${userInput.title} ![GitHub license](https://img.shields.io/badge/license-${userInput.license}-blue.svg)

#Live Site
${userInput.urlSite}

## Description
${userInput.description}

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
${userInput.installationInstructions}

## Usage
${userInput.usageInfo}

## License
${userInput.license}

## Contributing
${userInput.contributionGuidelines}

## Tests
${userInput.testInstructions}

## Questions
If you have any questions reach me on GitHub https://github.com/${userInput.github} or email me at ${userInput.email}

`;
}

module.exports = generateMarkdown;
