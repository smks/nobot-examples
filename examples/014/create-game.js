const readLineSync = require('readline-sync');
const fs = require('fs-extra');
const path = require('path');

// 1. Use a game template already built
const directoryToFindTemplates = path.join(__dirname, 'game-templates');
const options = fs.readdirSync(directoryToFindTemplates);

const index = readLineSync.keyInSelect(options);

// 2. With template let's create a new project skin
const projectName = readLineSync.question('What is the name of your game reskin? ', {
  limit: /^(?=\s*\S).*$/,
  limitMessage: 'The project has to have a name, try again',
});

const isHappyToCreateDirectory = readLineSync.keyInYN(`You entered '${projectName}', create directory with this name? `);

if (isHappyToCreateDirectory) {
  const template = options[index];
  const src = path.join(directoryToFindTemplates, template);
  const destination = path.join(__dirname, projectName);
  fs.copy(src, destination)
    .then(() => console.log('Successfully copied over'))
    .catch(err => console.error(err));
} else {
  console.log('Aborted creating a new game');
}
