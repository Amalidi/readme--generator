//import inquirer library//
const inquirer = require("inquirer");
const fs = require("fs");

const prompts = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project.",
  },
  {
    type: "input",
    name: "Description",
    message: "Please give a short description for your project",
  },
  {
    type: "confirm",
    name: "confirmInstallation",
    message: "Does your project require an installation process?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    when: (answers) => {
      return answers.confirmInstallation;
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter your project usage information.",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a licence for your project :",
    choices: [
      "MIT",
      "APACHE_2.0",
      "BSD_3",
      "GPL_3.0",
      "Boost Software License 1.0",
      "None",
    ],
  },
  {
    type: "confirm",
    name: "confirmContributing",
    message: "Would you like to give contribution guidelines for your project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please give the contribution guidelines for your project.",
    when: (answers) => {
      return answers.confirmContributing;
    },
  },
  {
    type: "confirm",
    name: "confirmTests",
    message: "Would you like to add testing guidelines for your app.",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the test process for your application.",
    when: (answers) => {
      return answers.confirmTests;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub user name ",
  },
];

const generateReadMe = (answers) => {
  return `# ${answers.title} ![MIT](https://img.shields.io/badge/${
    answers.license
  }-License-green)
  ## Table of Contents
  - [Description](#description)
  ${answers.confirmInstallation ? `- [Installation](#installation)` : ""}
  - [Usage](#usage)
  - [License](#license)
  ${answers.confirmContributing ? `- [Contributing](#contributing)` : ""}
  ${answers.confirmTests ? `- [Tests](#tests)` : ""}
  - [Questions](#questions)

  ## Description

  ${answers.Description}

  ${
    answers.confirmInstallation
      ? `## Installation
  Please follow the instructions below:

  \`\`\`\

  ${answers.installation}
  \`\`\`\ `
      : ""
  }
  ## Usage
  Once installed run the following command:
  \`\`\`
  ${answers.usage}
  \`\`\`
  ## License
  ${answers.license}
  ${
    answers.confirmContributing
      ? `## Contributing
  ${answers.contributing}`
      : ""
  }
  ${
    answers.confirmTests
      ? `## Tests
  Please follow the instructions below:
  \`\`\`\
  
  ${answers.tests}
  \`\`\`\ `
      : ""
  }
  ## Questions
  If you have any questions about the repo, please contact me via email ${
    answers.email
  }

  You can find more of my work on my [GitHub profile](https://github.com/${
    answers.githubUserName
  })`;
};

const init = async () => {
  const answers = await inquirer.prompt(prompts);
  const readMe = generateReadMe(answers);
  fs.writeFileSync("generated-ReadMe.md", readMe);
};

init();
