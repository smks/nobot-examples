require('colors');
const readLineSync = require('readline-sync');
const path = require('path');
const fs = require('fs-extra'); // contains extra functionality (replaces 'fs')

// 1. Use a game template already built
const directoryToFindTemplates = path.join(__dirname, 'game-templates');
const templates = fs.readdirSync(directoryToFindTemplates);

const index = readLineSync.keyInSelect(template);

if (index === -1) {
  process.exit(0);
}

// 2. Create a new project skin based on our template
const projectName = readLineSync.question('What is the name of your game? ', {
  limit: /^(?=\s*\S).*$/,
  limitMessage: 'The project has to have a name, try again'
});

const isHappyToCreateDirectory = readLineSync.keyInYN(`You entered '${projectName}', create directory with this name? `);

// 3. If happy to create, copy the template to the new location
if (isHappyToCreateDirectory) {
  const template = templates[index];
  const src = path.join(directoryToFindTemplates, template);
  const destination = path.join(__dirname, projectName);
  fs.copy(src, destination)
    .then(() => console.log(`Successfully created ${destination}`.green))
    .catch(console.error);
} else {
  console.log('Aborted creating a new game');
}
