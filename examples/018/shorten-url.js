/**
 * 1. First create a bit.ly account
 * 2. Create a Generic Access Token
 * 3. Copy your token into config.json
 */

const Bitly = require('bitly');
const { BITLY_TOKEN } = require('./config');

const STATUS_CODE_OK = 200;
const bitly = new Bitly(BITLY_TOKEN);

const args = process.argv.slice(2);
const [urlToShorten] = args;

const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;
const regex = new RegExp(expression);

if (urlToShorten === undefined || urlToShorten.match(regex) === null) {
  console.log("Please pass a string in URL form, e.g. 'http://www.opencanvas.co.uk'");
  process.exit(0);
}

bitly.shorten(urlToShorten)
  .then((response) => {
    const statusCode = response.status_code;
    const statusText = response.status_txt;
    if (statusCode !== STATUS_CODE_OK) {
      console.error('Something went wrong:', statusText);
    } else {
      console.log(`Shortened URL is: ${response.data.url}`);
    }
  })
  .catch(console.error);
