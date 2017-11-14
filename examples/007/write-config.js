#!/usr/bin/env node

// helpers
const path = require('path');
const writeJson = require('./helpers/write-json');
const getJiraData = require('./helpers/get-jira-data');

// values
const configFile = path.join(__dirname, '/data/config-new.json');
const jiraData = getJiraData();

writeJson(configFile, jiraData)
  .then(msg => console.log(msg))
  .catch((err) => { throw err; });
