#! /usr/bin/env node

const path = require('path');
const readJson = require('./helpers/read-json');

const configFile = path.join(__dirname, '/data/config.json');

readJson(configFile)
	.then(configFile => {
		console.log(`The ID of the project is: ${configFile.projectId}`);
		console.log(`The start date of the project is: ${configFile.startDate}`);
		console.log(`The end date of the project is: ${configFile.endDate}`);
	})
	.catch(error => console.log(`Could not read the configuration file: ${error}`));