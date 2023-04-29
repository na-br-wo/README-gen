// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  } else if (license === 'GNU GPLv3') {
    return `![GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license === 'MIT License') {
    return `![MIT](https://img.shields.io/badge/License-MIT-blue.svg)`
  } else if (license === 'Apache License 2.0') {
    return `![Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
