/**
 * 1. First create a bit.ly account
 * 2. Create a Generic Access Token
 * 3. Copy your token into config.json
 */

const Bitly = require('bitly');
const config = require('./config.json');

const bitly = new Bitly(config.BITLY_TOKEN);

const args = process.argv.slice(2);
const [urlToShorten] = args;

if (urlToShorten.match('http') === null) {
  console.log("Please pass a string as a URL e.g. 'http://www.opencanvas.co.uk'");
  process.exit(0);
}

bitly.shorten(urlToShorten)
  .then(response => console.log(`Shortened URL is: ${response.data.url}`))
  .catch(error => console.log(error));
