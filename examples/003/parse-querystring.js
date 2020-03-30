// querystring.parse will take a query string and create an object

const querystring = require('querystring');

const url = 'https://jira.my-company.com/rest/api/latest/search?jql="assignee=trevor.specht&startAt=2&maxResults=2"';

const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log(`assignee: ${parsedUrl.assignee}`);
console.log(`start at: ${parsedUrl.startAt}`);
console.log(`max results: ${parsedUrl.maxResults}`);