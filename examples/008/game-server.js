#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

var PORT = 12345;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('Welcome to Bunny Bombers Live Chat - Listening on ' + address.address + ":" + address.port);
});

/**
 * @param message Buffer
 */
server.on('message', function (chunk, remote) {
    let message = chunk.toString('utf8');
    const data = message.split('::');
    const user = data[0];
    const comment = data[1];
    console.log(user + ' from (' + remote.address + ':' + remote.port +') said: ' + comment);
});

server.bind(PORT, HOST);