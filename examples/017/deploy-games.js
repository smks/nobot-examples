const parse = require('csv-parse');
const transform = require('stream-transform');
const fs = require('fs');
require('colors');

const parser = parse({delimiter: ','});
const input = fs.createReadStream('game-releases.csv');
let iterator = 1;

const processRecord = (record, callback) => {
  const [game, template] = record;
  let message = `Deploying game ${iterator} '${game}' with template: '${template}'`;
  message = iterator % 2 === 0 ? message.bgGreen : message.bgBlue;
  iterator++;

  setTimeout(() => {
    // build game here
    callback(null, `${message}\n`);
  }, 500);
};

const transformer = transform(processRecord, {parallel: 300});

input
  .pipe(parser)
  .pipe(transformer)
  .pipe(process.stdout);
