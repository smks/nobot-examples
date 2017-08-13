#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

// helpers
const writeJson = require('./helpers/write-json');
const getJiraData = require('./helpers/get-jira-data');

// values
const configFile = __dirname + '/data/config-new.json';
const jiraData = getJiraData();

writeJson(configFile, jiraData).then(msg => console.log(msg))
	.catch(err => {
		throw err;
	});