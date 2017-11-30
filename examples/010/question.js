#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const { stdin, stdout } = require('process');

function createProjectDirectory(name) {
  console.log(`creating a new project called ${name}`);
  if (!fs.existsSync(name)) {
    fs.mkdirSync(name);
  }
}

const interfaceInstance = readline.createInterface(
  stdin,
  stdout,
  null,
);

const onProjectInput = (projectName) => {
  interfaceInstance.close();

  stdin.destroy();

  if (projectName.trim() !== '') {
    createProjectDirectory(projectName);
  } else {
    console.log('Please enter a project name');
  }
};

interfaceInstance.question('What is the name of your project? ', onProjectInput);
