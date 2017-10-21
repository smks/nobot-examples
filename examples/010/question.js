#!/usr/bin/env node

const fs = require('fs');
const readLineSync = require('readline-sync');

function createProjectDirectory(name) {
  console.log(`creating a new project called ${name}`);
  if (!fs.existsSync(name)) {
    fs.mkdirSync(name);
  }
}

const projectName = readLineSync.question('What is the name of your project? ', {
  limit: /^(?=\s*\S).*$/,
  limitMessage: 'The project has to have a name, try again',
});

const isHappyToCreateDirectory = readLineSync.keyInYN(`You entered '${projectName}', create directory with this name? `);

if (isHappyToCreateDirectory) {
  createProjectDirectory(projectName);
} else {
  console.log('fine... not creating a project, get back to Reddit');
}
