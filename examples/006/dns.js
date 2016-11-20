#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

const dns = require('dns');
dns.lookup('opencanvas.co.uk', {}, (err, address, family) => {
    console.log(address, family);
});