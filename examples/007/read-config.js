#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

const readJson = require('./helpers/read-json');
const configFile = __dirname + '/data/config.json';

readJson(configFile).then(configFile => {
	console.log('The ID of the project is: ' + configFile.projectId);
	console.log('The start date of the project is: ' + configFile.startDate);
	console.log('The end date of the project is: ' + configFile.endDate);
}).catch((error) => {
	console.log('Could not read the configuration file: ' + error);
});