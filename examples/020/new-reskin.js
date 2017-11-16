require('colors');
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const readLineSync = require('readline-sync');
const fs = require('fs-extra');
const open = require('opn');

let { gameName, gamePrimaryColor, gameSecondaryColor } = argv;
const gameJsonFilename = 'game.json';

if (gameName === undefined) {
  gameName = readLineSync.question('What is the name of the new reskin? ', {
    limit: /^(?=\s*\S).*$/,
    limitMessage: 'The project has to have a name, try again',
  });
}

if (gamePrimaryColor === undefined || gamePrimaryColor.indexOf('#') === -1) {
  gamePrimaryColor = readLineSync.question('Enter a Hex Code for the game primary color ', {
    limit: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    limitMessage: 'Enter a valid hex code: #efefef',
  });
}

if (gameSecondaryColor === undefined || gameSecondaryColor.indexOf('#') === -1) {
  gameSecondaryColor = readLineSync.question('Enter a Hex Code for the game secondary color ', {
    limit: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    limitMessage: 'Enter a valid hex code: #efefef',
  });
}

console.log(`Creating a new reskin '${gameName}' with skin color: Primary: '${gamePrimaryColor}' Secondary: '${gameSecondaryColor}'`);

const src = path.join(__dirname, 'releases', 'game-template');
const destination = path.join(__dirname, 'releases', gameName);
const configurationFile = path.resolve(destination, gameJsonFilename);

fs.copy(src, destination)
  .then(() => {
    console.log(`Successfully created ${destination}`.green);
    return fs.readJson(configurationFile);
  })
  .then(obj => {
    obj.primaryColor = gamePrimaryColor;
    obj.secondaryColor = gameSecondaryColor;
    return fs.writeJson(configurationFile, obj);
  })
  .then(() => {
    console.log(`Updated configuration file ${configurationFile}`.green);
    open(path.join(`http://localhost:8080`, 'releases', gameName, 'index.html'));
  })
  .catch(err => console.error(err));

