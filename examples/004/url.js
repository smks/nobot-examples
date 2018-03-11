const url = require('url');

const args = process.argv.slice(2);
const [urlEntered] = args;

if (urlEntered === undefined) {
  console.log('Please pass a URL');
  process.exit(1);
}

const {
  protocol, slashes, host, query, href,
} = url.parse(urlString);

console.log(`Using protocol: ${protocol}`);
console.log(`Using slashes: ${slashes}`);
console.log(`Host: ${host}`);
console.log(`Query: ${query}`);
console.log(`HREF: ${href}`);
