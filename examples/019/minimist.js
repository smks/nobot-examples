const argv = require('minimist')(process.argv.slice(2));
const readLineSync = require('readline-sync');

let { name, template, ticket } = argv;
const templates = ['pick-of-three', 'tic-tac-toe', 'spin-the-wheel'];

if (name === undefined) {
  name = readLineSync.question('What is the name of the new game? ');
}

if (template === undefined || (templates.includes(template) === false)) {
  const templateIndex = readLineSync.keyInSelect(templates, 'Choose your template ');
  template = templates[templateIndex];
}

if (ticket === undefined || (ticket.indexOf('GS-'))) {
  ticket = readLineSync.question('Enter ticket number prefixed with \'GS-\' ', {
    limit: /^GS-/,
    limitMessage: 'Enter a correct ticket ID prefixed with \'GS-\''
  });
}

console.log(`Creating '${name}' with template '${template}' on branch '${ticket}'`);
