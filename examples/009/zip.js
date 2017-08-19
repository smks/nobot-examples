#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

const fs = require('fs');
const archiver = require('archiver');

// create a file to stream archive data to.
const output = fs.createWriteStream('files.zip');
const archive = archiver('zip', {
    store: true // Sets the compression method to STORE.
});

// listen for all archive data to be written
output.on('close', function () {
    console.log(`Total bytes: ${archive.pointer()}`);
    console.log('archiving has now finished.');
});

// good practice to catch this error explicitly
archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);

// add files
archive.append(fs.createReadStream('copy.txt'), {name: 'content.txt'});
archive.append(fs.createReadStream('logo.jpg'), {name: 'nobo.jpg'});

// finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize();