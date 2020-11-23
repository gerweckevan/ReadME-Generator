// function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  # Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contruibting](#contributing)
  - [Test](#test)
  - [Credits](#credits)
  - [Licence](#licence)
  - [Questions](#questions)

![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

    ${response.description}
  ## Installation:
    ${response.installation}
  ## Usage:
    ${response.usage}
  ## Contributing:
    ${response.contribution}
  ## Test
    ${response.test}
  ## Credits:
    ${response.credit}
  ## License:
    For more info about this licence, you can click the link below.
  - [License](https://opensource.org/licenses/${response.license})
  
  ## Questions:
    For questions about the Generator,
    feel free to visit my GitHub page at the following link:
  - [GitHub Profile](https://github.com/${response.username})

  For any comments questions or concerns reach out to my email at: ${response.email}
`;
}

module.exports = generateMarkdown;
