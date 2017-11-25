const fs = require('fs');
const readLineSync = require('readline-sync');
require('colors');

const { reminders } = require('./reminders');

if (reminders.length === 0) {
  console.log('No reminders!'.green);
  process.exit(0);
}

const index = readLineSync.keyInSelect(reminders, 'What reminder have you dealt with? ');

if (index === -1) {
  process.exit(0);
}

console.log(`you removed '${reminders[index]}'`.red);

reminders.splice(index, 1);

fs.writeFileSync('./reminders.json', JSON.stringify({ reminders }));
