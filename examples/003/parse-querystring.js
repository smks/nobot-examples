#! /usr/bin/env node

/* jshint esversion: 6, node: true */


const querystring = require('querystring');

const url = 'http://www.opencanvas.co.uk?myName=Shaun&myAge=27&comment=Yes+I+am+getting+old';
const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log(`Hi my name is ${parsedUrl.myName}`);
console.log(`I am ${parsedUrl.myAge}`);
console.log(`Oh and... ${parsedUrl.comment}`);
