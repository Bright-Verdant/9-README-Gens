const inquirer = require('inquirer');
const fs = require('fs');
// call module
const { renderLicenseSection } = require('./utils/generateMarkdown');

// Questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What's the title of your project?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information for your project:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license does your project have?',
      choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  .then((answers) => {
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

${renderLicenseSection(answers.license)}

## Questions
If you have any questions, please contact me:
- GitHub: https://github.com/${answers.github}
- Email: ${answers.email}
`;

    //  Create a function to write README file
    fs.writeFile('./README.md', readmeContent, (err) => {
      if (err) throw err;
      console.log('README.md file has been created successfully!');
    });
  });
