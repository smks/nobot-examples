#!/usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

require('colors');

console.log('This is a success message'.green);
console.log('This is a warning message'.yellow);
console.log('This is a error message'.red);

log('This is a success message', 'success');
log('This is a warning message', 'warning');
log('This is a error message', 'error');

// Log output with prefix
const log = (message, type) => {
	let colorMessage;
	switch (type) {
		case 'error':
			colorMessage = '[ERROR] ' + message.red;
			break;
		case 'warning':
			colorMessage = '[WARNING] ' + message.yellow;
			break;
		case 'success':
			colorMessage = '[SUCCESS] ' + message.green;
			break;
		default:
			colorMessage = '[INFO] ' + message;
	}
	console.log(colorMessage);
}

modules.exports = log;