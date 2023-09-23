const querystring = require('querystring');

//https://jira.my-company.com/rest/api/latest/search?jql=assignee=rafael.viana&startAt=2&MAXRESULT=2

const apiHost = 'https://jira.my-company.com/rest/api/latest/search?jql=';

const jqlParams = {
  asignee: 'rafael.viana',

  startAt: 2,

  maxResults: 2
};

const apiUrl = `${apiHost}"${querystring.stringify(jqlParams)}"`;

console.log(`My JQL api call is : ${apiUrl}`);

