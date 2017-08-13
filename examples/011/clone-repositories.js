#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

require('colors');
const path = require('path');
const shell = require('shelljs');

const repositoriesDirectory = path.join(__dirname, 'my-repositories');
const repositories = [
    'https://github.com/smks/nobo-delivery',
    'https://github.com/smks/nobo-templates',
];

function cloneRepositories(path = '', repositories = []) {

    const repoCount = repositories.length;

    if (repoCount === 0 || path === '') {
        return;
    }

    console.log(`Cloning repositories to: ${repositoriesDirectory}`.blue);

    shell.cd(path);

    repositories.forEach((repoUrl, index) => {
        console.log(`Cloning ${index + 1} of ${repoCount}`.cyan);
        shell.exec(`git clone ${repoUrl} --progress -b master`);
    });

    console.log('Completed cloning of repositories'.green);
}

cloneRepositories(path, repositories);