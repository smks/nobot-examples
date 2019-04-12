const querystring = require('querystring');

const url = 'http://www.opencanvas.co.uk?myName=Shaun&myAge=28&comment=Yes+I+am+getting+old';

const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log(parsedUrl);

console.log(`Hi my name is ${parsedUrl.myName}`)
console.log(`My age is ${parsedUrl.myAge}`)
console.log(`Oh and... ${parsedUrl.comment}`)
