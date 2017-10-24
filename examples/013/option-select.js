const readLineSync = require('readline-sync');

const options = [];

for (let i = 0; i < 34; i += 1) {
  options.push(`option-${i + 1}`);
}

const index = readLineSync.keyInSelect(options);

console.log(`you chose ${options[index]}`);
