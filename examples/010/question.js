#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const { stdin, stdout } = require('process');
const path = require('path');

const onProjectInput = projectName => {
  interfaceInstance.close();
  stdin.destroy();
  createProjectDirectory(projectName);
};

const createProjectDirectory = name => {
  name = name.trim()
  if (name === '') {
    console.log('Cannot create a project without a name');
    return;
  }
  const projectPath = path.join(__dirname, name);
  if (fs.existsSync(projectPath)) {
    console.log(`${name} already exists`);
    return;
  }
  console.log(`creating a new project called ${name}`);
  fs.mkdirSync(projectPath);
};

const interfaceInstance = readline.createInterface(stdin, stdout);

interfaceInstance.question('What is the name of your project? ', onProjectInput);
