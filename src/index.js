const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("../src/utils/generateMarkdown");
const writeToFile = require("../src/utils/writeToFile");

console.log("hello from node js");

const prompts = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project.",
    default: "",
    validate: (inputName) => {
      if (!inputName) {
        return "You need to enter a project name!";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please give a short description for your project ",
    default: "",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project.",
    default: "",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter your project usage information.",
    default: "",
  },
  {
    type: "confirm",
    name: "confirmContribution",
    message: "Would you like to give contribution guidelines for your project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please give the contribution guidelines for your project.",
    when: (answers) => answers.confirmContribution,
    default: "",
  },
  {
    type: "confirm",
    name: "confirmTests",
    message: "Would you like to add testing instructions for your application?",
  },
  {
    type: "input",
    name: "tests",
    message: "please add testing guidelines for your application",
    when: (answers) => answers.confirmTests,
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
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
    validate: (githubInput) => {
      if (!githubInput) {
        return "You need to enter your GitHub username!";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
    validate: (email) => {
      if (!validator.validate(email)) {
        return "Please enter a valid email address";
      } else {
        return true;
      }
    },
  },
  {
    message:
      "Enter the chosen name for your README.md file? Make sure you only enter the file name, without the .md",
    name: "readme",
    default: "GENERATEDREADME",
  },
];
