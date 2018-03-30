#!/usr/bin/env node

const shell = require('shelljs');
const readLineSync = require('readline-sync');
const path = require('path');
const { repositories } = require('./config');

const { delivery, baseBranch } = repositories;
const repoName = delivery.substring(delivery.lastIndexOf('/'));

// Changing into the repo's directory
const repoPath = path.join(__dirname, repoName);
shell.cd(repoPath);

// Checkout to base branch
shell.exec(`git checkout ${baseBranch}`);

// Making sure we have the latest changes
shell.exec(`git pull origin ${baseBranch}`);

// prompt for the ticket number
const ticketNumber = readLineSync.question('What is the ticket ID? ', {
  limit: input => input.trim().length > 0,
  limitMessage: 'Please enter a ticket number (e.g. GOT-123)'
});

// Create a new branch
shell.exec(`git checkout -b ${ticketNumber}`);
