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
    message:
      "Would you like to give a installation guildances for your project?",
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
  //console.log("answers: " + JSON.stringify(answers));

  return `# Title: ${answers.title} ![MIT](https://img.shields.io/badge/${answers.license}-License-green)
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Github](#github)
## Description
${answers.title}
## Installation
Please follow the instructions below:
\`\`\`
${answers.installation}
\`\`\`
## Usage
Please follow the instructions below:
\`\`\`
${answers.usage}
\`\`\`
## License
${answers.license}
## Contributing
${answers.contributors}
## Tests
Please follow the instructions below:
\`\`\`
${answers.tests}
\`\`\`
## Questions
${answers.email}
## Github
${answers.github}
`;
};

// 3. declare your init function to ask questions
const init = async () => {
  // 1. get answers for first set of questions
  const answers = await inquirer.prompt(prompts);

  // 2. Generate the Readme
  const readMe = generateReadMe(answers);

  // 3. write to file generate readme
  fs.writeFileSync("generatedReadMe.md", readMe);
};

// 4. start your application
init();
