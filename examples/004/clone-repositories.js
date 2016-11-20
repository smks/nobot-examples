#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

const shell = require('shelljs');

const repositories = [
    'https://github.com/smks/ab-significance.git',
    'https://github.com/smks/next-primeminister.git',
];

const path = 'my-repositories';

/**
 *
 * @param organisation string
 * @param repoContainerPath string
 * @param repositories array
 */
function cloneRepositories(repoContainerPath, repositories) {

    console.log(`Cloning repositories to: ${repoContainerPath}`);

    const repoCount = repositories.length;

    shell.cd(repoContainerPath);

    repositories.forEach((repoUrl, index) => {
        console.log(`cloning ${index + 1} of ${repoCount}`);
        shell.exec('git clone ' + repoUrl + ' --progress -b master');
    });
}

cloneRepositories(path, repositories);