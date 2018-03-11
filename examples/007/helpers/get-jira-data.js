const jiraData = require('../data/mock-jira-data');

// Imagine this data being retrieved from Jira and transformed
const fetchDataFromJira = ticketNumber => jiraData[ticketNumber];

module.exports = fetchDataFromJira;
