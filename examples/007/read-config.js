#! /usr/bin/env node

const path = require('path');
const readJson = require('./helpers/read-json');

const configFile = path.join(__dirname, '/data/config.json');

readJson(configFile)
  .then((config) => {
    console.log(`The ID of the project is: ${config.projectId}`);
    console.log(`The start date of the project is: ${config.startDate}`);
    console.log(`The end date of the project is: ${config.endDate}`);
  })
  .catch(error => console.log(`Could not read the configuration file: ${error}`));
