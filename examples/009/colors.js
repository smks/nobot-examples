const log = require('./helpers/log');
const { ERROR, WARNING, SUCCESS } = require('./constants/message-types');

log('This is a success message', SUCCESS);
log('This is a warning message', WARNING);
log('This is a error message', ERROR);
log('This is an info message');