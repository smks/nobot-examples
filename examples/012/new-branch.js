#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

require('colors');
const shell = require('shelljs');
const readLineSync = require('readline-sync');

// Changing directory
shell.cd('nobo-delivery');

// making sure we have the latest changes
shell.exec('git pull origin master');

// prompt for the ticket number
const ticketNumber = readLineSync.question('What is the ticket ID? ', {
    limit: /^(?=\s*\S).*$/,
    limitMessage: 'Please enter a ticket number (GOT-123)'
});

// Create a new branch
shell.exec(`git checkout -b ${ticketNumber}`);

// Let the user know it was created
console.log(`Changed to new branch ${ticketNumber}`);

