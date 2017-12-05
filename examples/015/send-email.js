require('colors');
const config = require('./config');
const nodemailer = require('nodemailer');

const args = process.argv.slice(2);
const REQUIRED_FIELDS_COUNT = 2;

if (args.length !== REQUIRED_FIELDS_COUNT) {
  console.log('Error! Please pass the following fields: {SUBJECT:"Where\'s my tea?"} {MESSAGE: "So yeah... where is it?"'.red);
  console.log('Example: \'node send-email.js "Where\'s my tea?" "So yeah... where is it?"\''.cyan);
  process.exit(0);
}

const [subject, text] = args;
const { HOST, PORT, FROM_EMAIL, TO_EMAIL } = config;
const { USERNAME, PASSWORD } = config.AUTH;

const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: false,
  auth: {
    user: USERNAME,
    pass: PASSWORD,
  },
});

const message = {
  from: FROM_EMAIL,
  to: TO_EMAIL,
  subject,
  text,
  html: `<p>${text}</p>`,
};

transporter.sendMail(message, (err, info) => {
  if (err) {
    console.log(`Error occurred. ${err.message}`);
    return process.exit(1);
  }

  return console.log('Message sent: %s', info.messageId);
});

