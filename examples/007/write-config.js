#!/usr/bin/env node

// helpers
const path = require('path');
const writeJson = require('./helpers/write-json');
const getJiraData = require('./helpers/get-jira-data');

const args = process.argv.slice(2);
const [ticket] = args;

// values
const jiraTicket = ticket || 'GS-1224';
const jiraData = getJiraData(jiraTicket);
const { game } = jiraData;
const newConfigFile = path.join(__dirname, 'data', `${game}.json`);

writeJson(newConfigFile, jiraData)
  .then(msg => console.log(msg))
  .catch((err) => { throw err; });
