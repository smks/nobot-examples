#! /usr/bin/env node

require('colors');
const path = require('path');
const shell = require('shelljs');

const repositoriesDirectory = path.join(__dirname, 'my-repositories');
const repositories = [
  'https://github.com/smks/nobo-delivery',
  'https://github.com/smks/nobo-templates',
];

function cloneRepositories(repositoryPath, repositoryList) {
  const repositoryCount = repositories.length;

  if (repositoryCount === 0 || repositoryPath === '') {
    return;
  }

  console.log(`Cloning repositories to: ${repositoriesDirectory}`.blue);

  shell.cd(repositoryPath);

  repositoryList.forEach((repositoryUrl, index) => {
    console.log(`Cloning ${index + 1} of ${repositoryCount}`.cyan);
    shell.exec(`git clone ${repositoryUrl} --progress -b master`);
  });

  console.log('Completed cloning of repositories'.green);
}

cloneRepositories(repositoriesDirectory, repositories);
