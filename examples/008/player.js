#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

var PORT = 12345;
var HOST = '127.0.0.1';

var dgram = require('dgram');

const args = process.argv.slice(2);
const user = args[0];
const message = args[1];

if (!message) {
    console.log('enter a message to send');
    process.exit(0);
}

console.log('sending: ' + message);
sendMessageViaUDP(user + '::' + message);

/**
 *
 * @param message
 */
function sendMessageViaUDP(str) {
    let client = dgram.createSocket('udp4');
    let message = new Buffer(str);
    client.send(message, 0, message.length, PORT, HOST, (err) => {
        if (err) {
            throw err;
        }
        console.log('UDP message sent to ' + HOST + ':' + PORT);
        client.close();
    });
}