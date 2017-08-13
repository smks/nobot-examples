#! /usr/bin/env node

/*jshint esversion: 6, node: true */
"use strict";

const fs = require('fs');

const writeJson = (file, contents) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(contents, null, 4), (err) => {
            if (err) {
                reject(err);
            }
            resolve(`${file} written`);
        });
    });
};

module.exports = writeJson;