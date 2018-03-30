const { platform } = require('os');
const { exec } = require('child_process');

const osPlatform = platform();
const args = process.argv.slice(2);
const [url] = args;

if (url === undefined) {
  console.log('Please enter a URL e.g. "http://www.opencanvas.co.uk"');
  process.exit(1);
}

let command;

if (osPlatform === 'win32') {
  command = `start microsoft-edge:${url}`;
} else {
  command = `open -a "Google Chrome" ${url}`;
}

console.log(`executing command: ${command}`);

exec(command);
