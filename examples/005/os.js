/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* The os module allows us to query hardware specifications of our computer */
const os = require('os');

const homeDirectory = os.homedir();

console.log(`Your home directory is: ${homeDirectory}`);

/* You can identify your OS platform with the os.platform function */
const osPlatform = os.platform();

console.log(`Your operating system platform is: ${osPlatform}`);

/* Identify CPU specs with the os.cpus function */
const cpuCores = os.cpus();
const coreCount = cpuCores.length;
const cpuModel = cpuCores[0].model;

console.log(`Your ${cpuModel} has ${coreCount} cores.`);
