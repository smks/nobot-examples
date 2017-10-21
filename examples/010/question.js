#!/usr/bin/env node

// require dependencies
const fs = require('fs');
const readLineSync = require('readline-sync');

const projectName = readLineSync.question('What is the name of your project? ', {
  limit: /^(?=\s*\S).*$/,
  limitMessage: 'The project has to have a name, try again',
});

const isHappyToCreateDirectory = readLineSync.keyInYN(`You entered '${projectName}', create directory with this name? `);

if (isHappyToCreateDirectory) {
  console.log(`creating a new project called ${projectName}`);
  if (!fs.existsSync(projectName)) {
    fs.mkdirSync(projectName);
  }
} else {
  console.log('fine... not creating a project, get back to Reddit');
}
