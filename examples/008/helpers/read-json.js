#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

const fs = require('fs');

const readJson = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, {encoding: 'UTF-8'}, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
};

module.exports = readJson;