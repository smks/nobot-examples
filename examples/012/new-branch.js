#!/usr/bin/env node

require('colors');
const shell = require('shelljs');
const readLineSync = require('readline-sync');

const baseBranch = 'master';

// Changing directory
shell.cd('nobot-delivery');

// Checkout to base branch
shell.exec(`git checkout ${baseBranch}`)

// Making sure we have the latest changes
shell.exec(`git pull origin ${baseBranch}`);

// prompt for the ticket number
const ticketNumber = readLineSync.question('What is the ticket ID? ', {
  limit: /^(?=\s*\S).*$/,
  limitMessage: 'Please enter a ticket number (GOT-123)',
});

// Create a new branch
shell.exec(`git checkout -b ${ticketNumber}`);
