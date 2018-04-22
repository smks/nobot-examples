const path = require('path');
// helpers
const writeJson = require('./helpers/write-json');
const getJiraData = require('./helpers/get-jira-data');

const args = process.argv.slice(2);
const [ticket] = args;

const jiraTicket = ticket || 'GS-1000';
const jiraData = getJiraData(jiraTicket);
if (!jiraData) {
  console.log(`JIRA ticket ${jiraTicket} not found`);
  process.exit(1);
}

const newConfigFile = path.join(__dirname, 'data', 'config.json');

writeJson(newConfigFile, jiraData)
  .then(msg => console.log(msg))
  .catch((err) => { throw err; });
