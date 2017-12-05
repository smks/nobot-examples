const fs = require('fs');
const { reminders } = require('./.reminders');

const args = process.argv.slice(2);
const [reminder] = args;

if (reminder === undefined) {
  console.log('Pass a reminder \'pick up rabbit\'');
  process.exit(0);
}

const hasReminderAlready = reminders.indexOf(reminder) > -1;

if (hasReminderAlready) {
  console.log(`✖ Already have the reminder '${reminder}' set`);
  process.exit(0);
}

reminders.push(reminder.replace(/' {2}'/g, ' ').trim());

fs.writeFileSync(`${__dirname}/.reminders.json`, JSON.stringify({ reminders }));

console.log('✔ Added reminder');
