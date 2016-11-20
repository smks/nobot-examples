#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

const os = require('os');

const homeDirectory = os.homedir();
const osPlatform = os.platform();

console.log('Your home directory is: ' + homeDirectory);
console.log('The OS platform is: ' + osPlatform);

const cpuCores = os.cpus();
const coreCount = cpuCores.length;
const cpuModel = cpuCores[0].model;

console.log(`I can see your ${cpuModel} has ${coreCount} cores.`);
