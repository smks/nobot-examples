require('colors');
const shell = require('shelljs');
const { repository } = require('./config');

const { delivery } = repository;

console.log(`Cloning ${delivery}`.cyan);

shell.cd(__dirname);

shell.exec(`git clone ${delivery} --progress`);
