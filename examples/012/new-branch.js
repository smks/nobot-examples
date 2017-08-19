const fs = require('fs');
const shell = require('shelljs');
const readLineSync = require('readline-sync');
const branchExists = require('./branch-exists');

const newBranch = (branchPath) => {

   shell.cd(branchPath);

   const branchName = readLineSync.question('Please enter the ticket number ', {
       limit: /^[0-9]{1,20}$/,
       limitMessage: 'Invalid ticket number'
   });

   shell.exec('git checkout master && git pull origin master');

   let checkoutCommand = 'git checkout ';

   if (branchExists(branchName)) {
       checkoutCommand += '-b ';
   }

   checkoutCommand += branchName;

   shell.exec(checkoutCommand);

   console.log(`Branch ${branchName} created at ${branchPath}`);

   return branchName;
};

module.exports = newBranch;