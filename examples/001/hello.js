#!/usr/bin/env node

const args = process.argv.slice(2);
const [name] = args;

if (name === undefined) {
  console.log('Please pass a name: node hello.js Shaun');
  process.exit(0);
}

console.log(`Good day to you ${name}`);
