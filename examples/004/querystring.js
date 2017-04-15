#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

const querystring = require('querystring');

/**
 * Parse URL parameters
 */
const url = 'http://www.opencanvas.co.uk?myName=Shaun&myAge=27&comment=Yes+I+am+getting+old';
const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log('Hi my name is ' + parsedUrl.myName);
console.log('I am ' + parsedUrl.myAge);
console.log('Oh and... ' + parsedUrl.comment);

/**
 * Build URL parameters
 */

//  https://jira.my-company.com/rest/api/latest/search?jql="assignee=shaun.stone&startAt=2&maxResults=2"

const apiHost = 'https://jira.my-company.com/rest/api/latest/search?jql=';

const jqlParams = {
    'assignee': 'shaun.stone',
    'startAt': 2,
    'maxResults': 2
};
const apiUrl = `${apiHost}"${querystring.stringify(jqlParams)}"`;
console.log('My JQL api call is: ' + apiUrl);