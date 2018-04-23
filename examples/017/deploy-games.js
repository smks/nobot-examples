require('colors');
const path = require('path');
const { stdout } = require('process');
const parse = require('csv-parse');
const transform = require('stream-transform');
const fs = require('fs');

const DELAY_TIME = 500;
const parser = parse({ delimiter: ',' });
const gameReleasesPath = path.join(__dirname, 'game-releases.csv');
const input = fs.createReadStream(gameReleasesPath);
let iterator = 1;

const processRecord = (record, callback) => {
  const [game, template] = record;
  let message = `Deploying game ${iterator} '${game}' with template: '${template}'`;
  message = (iterator % 2 === 0) ? message.bgGreen : message.bgBlue;
  iterator += 1;
  setTimeout(() => {
    // build game here
    callback(null, `${message}\n`);
  }, DELAY_TIME);
};

const transformer = transform(processRecord);

input
  .pipe(parser)
  .pipe(transformer)
  .pipe(stdout);
