/* eslint-disable linebreak-style */
const { platform } = require('os');

const { exec } = require('child_process');

const WINDOWS_PLATFORM = 'win32';
const osPlatform = platform();
const args = process.argv.slice(2);
const [url] = args;

if (url === undefined) {
  console.log('Please enter an URL, e.g., "http://www.opencanvas.co.uk"');
  process.exit(0);
}
let command;
if (osPlatform === WINDOWS_PLATFORM) {
  command = `Start Microsoft-Edge:${url}`;
} else {
  command = `open -a "Google Chrome" ${url}`;
}
console.log(`Executing command: ${command}`);
exec(command);
