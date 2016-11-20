#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

const fs = require('fs');

fs.readFile('config.json', {encoding: 'UTF-8'}, (err, data) => {
    if (err) {
        throw Error(err);
    }
    const configFile = JSON.parse(data);
    console.log('The ID of the project is: ' + configFile.projectId);
    console.log('The start date of the project is: ' + configFile.startDate);
    console.log('The start date of the project is: ' + configFile.endDate);
});