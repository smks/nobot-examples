#! /usr/bin/env node

const fs = require('fs');

const writeJson = (file, contents) => new Promise((resolve, reject) => {
  fs.writeFile(file, JSON.stringify(contents, null, 4), (err) => {
    if (err) {
      reject(err);
    }
    resolve(`${file} written`);
  });
});

module.exports = writeJson;
