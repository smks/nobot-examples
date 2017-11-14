#!/usr/bin/env node

const url = require('url');

const urlString = 'http://www.opencanvas.co.uk?myName=Shaun&myAge=27&comment=Yes+I+am+getting+old';
const urlObject = url.parse(urlString);

console.log(`Using protocol: ${urlObject.protocol}`);
console.log(`Using slashes: ${urlObject.slashes}`);
console.log(`Host: ${urlObject.host}`);
console.log(`Query: ${urlObject.query}`);
console.log(`HREF: ${urlObject.href}`);
