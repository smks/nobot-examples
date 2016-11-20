#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

const querystring = require('querystring');

/**
 * Parse URL parameters
 */
const url = 'http://www.opencanvas.co.uk?myName=Shaun&myAge=27&comment=Yes+I+am+getting+old';
const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log('Hi my name is ' + parsedUrl.myName);
console.log('I am ' + parsedUrl.myAge);
console.log('Oh and... ' + parsedUrl.comment);

/**
 * Build URL parameters
 */
const apiHost = 'https://netflixy.api.com?'
const myApiParams = {
    key: 'SLJDFNG98P4NFJENEF',
    user: 'shaunstone@myemail.com',
    search: 'tv-shows',
    categories: 'thriller, drama, comedy'
};
const apiUrl = apiHost + querystring.stringify(myApiParams);
console.log('Making an API call to: ' + apiUrl);