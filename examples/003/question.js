#!/usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

// require dependencies
const readLineSync = require('readline-sync');

const shouldRunGulp = readLineSync.question('Would you like to run gulp? (y|n) ', {
    limit: /^y|n$/,
    limitMessage: 'Please enter (y) or (n)'
});

if (shouldRunGulp === 'y') {
    console.log('running gulp');
} else {
    console.log('not running gulp');
}