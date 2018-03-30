const config = require('./config');
const readLineSync = require('readline-sync');
const Twilio = require('twilio');

/**
 * Before you can send an SMS from Node.js using Twilio,
 * you'll need to sign up for a Twilio account
 */

const {
  TWILIO_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER,
  MY_SPOUSE_NUMBER
} = config;

const client = new Twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

const foodChoices = [
  'spag bowl 2nite',
  'chinese takeaway 2nite',
  'pie n mash 2nite',
  'charred leeks with anchovy dressing 2nite',
  'confit of salmon, new potato & dill drizzle 2nite',
  '2 recover from my lunch, no food plz!',
  '2 cook 2nite'
];

const index = readLineSync.keyInSelect(foodChoices, 'What do you want for dinner?');

if (index === -1) {
  process.exit(0);
}

const smsMessage = {
  body: `Hi Bub, I'd like ${foodChoices[index]}`,
  from: TWILIO_PHONE_NUMBER,
  to: MY_SPOUSE_NUMBER
};

console.log(`sending message: ${smsMessage.body}`);

// Send the text message.
client.messages.create(smsMessage)
  .then(({ sid }) => {
    console.log('SMS sent. Id:', sid);
  })
  .catch(error => {
    console.error('Error sending Twilio message', error);
  });