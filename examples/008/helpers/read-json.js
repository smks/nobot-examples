#! /usr/bin/env node

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