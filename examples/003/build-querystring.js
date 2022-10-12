/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* global URLSearchParams, */
/* eslint no-undef: "error" */
const apiHost = 'https://jira.my-company.com/rest/api/latest/search?jql=';

const jqlParams = new URLSearchParams({
  assignee: 'shaun.stone',
  startAt: 2,
  maxResults: 2
});

const apiUrl = `${apiHost}"${jqlParams.toString()}"`;

console.log(`My JQL api call is: ${apiUrl}`);
