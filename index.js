const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: function (input) {
      if (input === '') {
        console.log('Your project must have a title')
        return false
      } else { return true }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: "Provide a short description of your project's functionality:",
    validate: function (input) {
      if (input === '') {
        console.log('You must provide a description')
        return false
      } else { return true }
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'Provide installation instructions for your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: "Provide examples of your app's usage:"
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Select the license your project falls under:',
    choices: ['None', 'GNU GPLv3', 'MIT License', 'Apache License 2.0'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide guidelines for others who wish to contribute:'
  },
  {
    type: 'input',
    name: 'testing',
    message: 'Describe how to run tests to check your project functionality: '
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address'
  },
];

function writeToFile(fileName, data) {
  // using fs to write the README file in the current working directory
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
  inquirer.prompt(questions).then(answers => {
    const markdown = generateMarkdown(answers)
    writeToFile('README.md', markdown)
  })
}

init();
