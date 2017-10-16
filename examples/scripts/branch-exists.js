const shell = require('shelljs');

const branchExists = (branchName) => {
    return (shell.exec(`git branch --list ${branchName}`).stdout.length === 0) ? false : true;
};

module.exports = branchExists;