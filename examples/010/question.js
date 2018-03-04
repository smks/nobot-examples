const fs = require('fs');
const readline = require('readline');
const { stdin, stdout } = require('process');

function createProjectDirectory(name) {
  if (fs.existsSync(name) === false) {
    console.log(`creating a new project called ${name}`);
    return fs.mkdirSync(name);
  }
  return console.log(`${name} exists already`);
}

const interfaceInstance = readline.createInterface(stdin, stdout);

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
