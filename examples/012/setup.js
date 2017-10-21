#! /usr/bin/env node

/* jshint esversion: 6, node: true */


require('colors');
const shell = require('shelljs');

const repository = 'https://github.com/smks/nobo-delivery';

console.log(`Cloning ${repository}`.cyan);
shell.exec(`git clone ${repository} --progress -b master`);
