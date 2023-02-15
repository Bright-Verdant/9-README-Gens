// Function to return a license badge
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === 'GPL') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === 'BSD') {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else {
    return '';
  }
}

// Function to return the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'BSD') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else {
    return '';
  }
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (license) {
    return `
## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
${renderLicenseBadge(license)}
    `;
  } else {
    return '';
  }

 
;}




module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};