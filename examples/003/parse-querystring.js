/* eslint-disable linebreak-style */
/* global URL, */

const querystring = require('querystring');
const apiUrl = 'http://www.opencanvas.co.uk?myName=Shaun&myAge=28&comment=Yes+I+am+getting+old';
const parsedUrl = querystring.parse(apiUrl.substring(apiUrl.indexOf('?') + 1));

console.log(parsedUrl);

// console.log(parsedUrl);

// console.log(`href: ${apiUrl.href}`);

// console.log(`host: ${apiUrl.host}`);

// console.log(`hostname: ${apiUrl.hostname}`);

// console.log(`path: ${apiUrl.pathname}`);

// console.log(`port: ${apiUrl.port}`);

// console.log(`querystring: ${apiUrl.search}`);

// console.log(`JSON: ${JSON.stringify(apiUrl)}`);

// const querystring = apiUrl.search;

// console.log(`params: ${querystring}`);

// const querystring = require('querystring');
// const url = 'http://www.opencanvas.co.uk?myName=Shaun&myAge=28&comment=Yes+I+am+getting+old';
// const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log(`Hi my name is ${parsedUrl.myName}`);
console.log(`I am ${parsedUrl.myAge}`);
console.log(`Oh and... ${parsedUrl.comment}`);
