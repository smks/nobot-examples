#!/usr/bin/env node

const url = require('url');

const args = process.argv.slice(2);
const [urlEntered] = args;

const urlString = urlEntered || 'http://www.opencanvas.co.uk?myName=Shaun&myAge=27&comment=Yes+I+am+getting+old';
const {
  protocol, slashes, host, query, href,
} = url.parse(urlString);

console.log(`Using protocol: ${protocol}`);
console.log(`Using slashes: ${slashes}`);
console.log(`Host: ${host}`);
console.log(`Query: ${query}`);
console.log(`HREF: ${href}`);
