#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

require('colors');
const shell = require('shelljs');

const repositories = [
    'https://github.com/smks/ab-significance.git',
    'https://github.com/smks/next-primeminister.git',
];

const path = 'my-repositories';

/**
 *
 * @param path string
 * @param repositories array
 */
function cloneRepositories(path, repositories) {

    console.log(`Cloning repositories to: ${path}`);

    const repoCount = repositories.length;

    shell.cd(path);

    repositories.forEach((repoUrl, index) => {
        console.log(`cloning ${index + 1} of ${repoCount}`);
        shell.exec('git clone ' + repoUrl + ' --progress -b master');
    });

    console.log('Completed cloning of repositories'.green);
}

cloneRepositories(path, repositories);