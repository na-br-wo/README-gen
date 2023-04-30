function renderLicenseBadge(license) {
   if (license === 'GNU GPLv3') {
    return `![GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license === 'MIT License') {
    return `![MIT](https://img.shields.io/badge/License-MIT-blue.svg)`
  } else if (license === 'Apache License 2.0') {
    return `![Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else {
    return ''
  }
}

function renderLicenseLink(license) {
  if (license === 'GNU GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license === 'MIT License') {
    return `https://opensource.org/licenses/MIT`
  } else if (license === 'Apache License 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    // variables for when the other license functions are called
    const badge = renderLicenseBadge(license)
    const link = renderLicenseLink(license)

    // return the following markdown code:
    return `
    ## License
    This project is licensed under the ${badge}[${license}](${link}) license.
    `
  } else {
    return ''
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## How to Contribute
  ${data.contribution}
  ## Testing
  ${data.testing}
  ## Made By
  [${data.github}](https://github.com/${data.github}) (email: ${data.email})
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
