#!/usr/bin/env node

const os = require('os');
const {exec} = require('child_process');

const osPlatform = os.platform();
const args = process.argv.slice(2);
const [url] = args;

let command;

if (osPlatform === 'win32') {
  command = `start microsoft-edge:${url}`;
} else {
  command = `open chrome ${url}`;
}

if (url === undefined) {
  console.log('Please enter a URL e.g. "http://www.opencanvas.co.uk"');
  process.exit(1); // 1 indicates failure
}

console.log(`executing command: ${command}`);

exec(command);
