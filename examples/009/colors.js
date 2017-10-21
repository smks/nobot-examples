#!/usr/bin/env node

require('colors');

const MESSAGE_TYPES = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

console.log('This is a success message'.green);
console.log('This is a warning message'.yellow);
console.log('This is a error message'.red);

// Log output with prefix
function log(message, type) {
  let colorMessage;
  switch (type) {
    case MESSAGE_TYPES.ERROR:
      colorMessage = `[ERROR] ${message.red}`;
      break;
    case MESSAGE_TYPES.WARNING:
      colorMessage = `[WARNING] ${message.yellow}`;
      break;
    case MESSAGE_TYPES.SUCCESS:
      colorMessage = `[SUCCESS] ${message.green}`;
      break;
    default:
      colorMessage = `[INFO] ${message}`;
  }
  console.log(colorMessage);
}

log('This is a success message', MESSAGE_TYPES.SUCCESS);
log('This is a warning message', MESSAGE_TYPES.WARNING);
log('This is a error message', MESSAGE_TYPES.ERROR);
