#!/usr/bin/env node

require('colors');
const shell = require('shelljs');

const repository = 'https://github.com/smks/nobo-delivery';

console.log(`Cloning ${repository}`.cyan);
shell.exec(`git clone ${repository} --progress -b master`);
