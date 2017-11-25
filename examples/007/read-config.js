#!/usr/bin/env node

const path = require('path');
const { projectId, startDate, endDate } = require('./data/config');

console.log(`The ID of the project is: ${projectId}`);
console.log(`The start date of the project is: ${startDate}`);
console.log(`The end date of the project is: ${endDate}`);