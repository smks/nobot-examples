const config = require('./config.json');
const readLineSync = require('readline-sync');
const Twilio = require('twilio');

/**
 * Twilio v3
 *
 * Before you can send an SMS from Node.js,
 * you'll need to sign up for a Twilio account
 * and purchase an SMS-capable phone number.
 * When you search for a number to buy, you'll
 * be able to see what types of communication it can power.
 */

const {
  TWILIO_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER,
  MY_WIFES_NUMBER,
} = config;

const client = new Twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

const excuses = [
  'gona be l8, deadline 2 meet',
  '0 trains, sleepin in office 2nite',
  'im locked in office, guna b l8',
  'going out on the lash, leave key out pls',
  'hitting the gym, b bak l8',
  'hitting the dancefloor, b bak really l8',
];

const index = readLineSync.keyInSelect(excuses, "What's your excuse today?");

if (index === -1) {
  process.exit(1);
}

const smsMessage = {
  body: `Hi Honey Bun, ${excuses[index]}`,
  from: TWILIO_PHONE_NUMBER,
  to: MY_WIFES_NUMBER,
};

console.log(`sending message: ${smsMessage.body}`);

// Send the text message.
client.messages.create(smsMessage)
  .then(message => console.log(message.sid));
