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
    limitMessage: 'The project has to have a name, try again'
  });
}

const checkColorInput = (color, colorType = 'primary') => {
  let colorInput;
  if (color === undefined || color.indexOf('#') === -1) {
    colorInput = readLineSync.question(`Enter a Hex Code for the game ${colorType} color `, {
      limit: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      limitMessage: 'Enter a valid hex code: #efefef'
    });
  } else {
    colorInput = color;
  }
  return colorInput;
};

gamePrimaryColor = checkColorInput(gamePrimaryColor, 'primary');
gameSecondaryColor = checkColorInput(gameSecondaryColor, 'secondary');

console.log(`Creating a new reskin '${gameName}' with skin color: Primary: '${gamePrimaryColor}' Secondary: '${gameSecondaryColor}'`);

const src = path.join(__dirname, 'template');
const destination = path.join(__dirname, 'releases', gameName);
const configurationFile = path.join(destination, gameJsonFilename);
const projectToOpen = path.join('http://localhost:8080', 'releases', gameName, 'index.html');

fs.copy(src, destination)
  .then(() => {
    console.log(`Successfully created ${destination}`.green);
    return fs.readJson(configurationFile);
  })
  .then((config) => {
    const newConfig = config;
    newConfig.primaryColor = gamePrimaryColor;
    newConfig.secondaryColor = gameSecondaryColor;
    return fs.writeJson(configurationFile, newConfig);
  })
  .then(() => {
    console.log(`Updated configuration file ${configurationFile}`.green);
    checkIfOpenGame(projectToOpen);
  })
  .catch(err => console.error(err));


const checkIfOpenGame = (projectOpening) => {
  const isOpeningGame = readLineSync.keyInYN('Would you like to open the game? ');
  if (isOpeningGame) {
    open(projectOpening);
  }
};
