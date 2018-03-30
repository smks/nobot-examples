require('colors');
const shell = require('shelljs');
const { repositories } = require('./config');

const { delivery } = repositories;

console.log(`Cloning ${delivery}`.cyan);

shell.cd(__dirname);

shell.exec(`git clone ${delivery} --progress`);
