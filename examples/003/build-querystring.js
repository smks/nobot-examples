// querystring is a Node.js standard library module that takes an object
// of key-value pairs and using the stringify method returns a formatted query string

const querystring = require('querystring');

const apiHost = 'https://jira.my-company.com/rest/api/latest/search?jql=';

const jqlParams = {
    assignee: 'trevor.specht',
    startAt: 2,
    maxResults: 2
};

const apiUrl = `${apiHost}"${querystring.stringify(jqlParams)}"`;

console.log(`API call: ${apiUrl}`);