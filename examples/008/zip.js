#!/usr/bin/env node

const fs = require('fs');
var path = require('path');
const archiver = require('archiver');

// create a file to stream archive data to.
const zipPath = path.join(__dirname, 'files.zip');
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', {
  store: true, // Sets the compression method to STORE.
});

// listen for all archive data to be written
output.on('close', () => {
  console.log(`Total bytes: ${archive.pointer()}`);
  console.log('archiving has now finished.');
});

// good practice to catch this error explicitly
archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// add files (read the copy.txt and logo.jpg and output with different names)
const textPath = path.join(__dirname, 'copy.txt');
const logoPath = path.join(__dirname, 'logo.jpg');
archive.append(fs.createReadStream(textPath), { name: 'content.txt' });
archive.append(fs.createReadStream(logoPath), { name: 'nobot.jpg' });

// finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize();
