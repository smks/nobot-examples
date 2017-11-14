require('colors');
const config = require('./config.json');
const nodemailer = require('nodemailer');

const args = process.argv.slice(2);
const REQUIRED_FIELDS_COUNT = 3;

if (args.length !== REQUIRED_FIELDS_COUNT) {
  console.log('Error! Please pass the following fields: {EMAIL_TO:employee@mycompany.com} {SUBJECT:"Where\'s my tea?"} {MESSAGE: "So yeah... where is it?"'.red);
  console.log('Example: \'node send-email.js employee@mycompany.com "Where\'s my tea?" "So yeah... where is it?"\''.cyan);
  process.exit(0);
}

const [to, subject, text] = args;
const { HOST, PORT } = config;
const { USERNAME, PASSWORD } = config.AUTH;

// Create a SMTP transporter object
const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: false,
  auth: {
    user: USERNAME,
    pass: PASSWORD,
  },
});

// Message object
const message = {
  from: config.FROM_EMAIL,
  to: `<${to}>`,
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

