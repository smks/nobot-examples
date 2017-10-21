#! /usr/bin/env node

/* jshint esversion: 6, node: true */


const PORT = 12345;
const HOST = '127.0.0.1';

const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => {
  const address = server.address();
  console.log(`Welcome to Bunny Trap Live Chat - Listening on ${address.address}:${address.port}`);
});

/**
 * @param message Buffer
 */
server.on('message', (chunk, remote) => {
  const message = chunk.toString('utf8');
  const data = message.split('::');
  const user = data[0];
  const comment = data[1];
  console.log(`${user} from (${remote.address}:${remote.port}) said: ${comment}`);
});

server.bind(PORT, HOST);
