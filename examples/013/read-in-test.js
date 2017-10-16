const readLineSync = require('readline-sync');

let options = [];

for (let i = 0; i < 35; i++) {
    options.push(`option-${i + 1}`);
}

const index = readLineSync.keyInSelect(options);

console.log('you chose ' + options[index]);