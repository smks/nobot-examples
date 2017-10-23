const parse = require('csv-parse');
const transform = require('stream-transform');
const fs = require('fs');

const parser = parse({ delimiter: ',' });
const input = fs.createReadStream('colleagues.csv');

const transformer = transform((record, callback) => {
  const [firstName, lastName, email] = record;
  const message = `Hey, ${firstName} ${lastName}! It's me from second floor. I've brought in some doughnuts! Hurry!`;
  setTimeout(() => {
    // send message here with {email}
    callback(null, `Emailing ${email}: ${message}\n`);
  }, 500);
}, { parallel: 300 });

input
  .pipe(parser)
  .pipe(transformer)
  .pipe(process.stdout);
