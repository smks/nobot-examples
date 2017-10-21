const shell = require('shelljs');

const branchExists = branchName => (shell.exec(`git branch --list ${branchName}`).stdout.length !== 0);

module.exports = branchExists;
