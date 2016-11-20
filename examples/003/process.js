#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

const util = require('util');

console.log(`This process is pid ${process.pid}`);

process.on('exit', (code) => {
    console.log(`The process has now finished, existing with code: ${code}`);
});

const startUsageOfCpu = process.cpuUsage();

// Rick Grime's array
let arrayofThangs = [];
let i = 0;

const iterations = 100;

while (i < iterations) {
    // how much of the V8 engine memory is being used
    console.log(util.inspect(process.memoryUsage()));
    arrayofThangs.push({
        number: i
    });
    i++;
}

const endUsageOfCpu = process.cpuUsage(startUsageOfCpu);

console.log(endUsageOfCpu);

process.exit(0);