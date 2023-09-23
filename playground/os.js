const os = require('os');

const homeDirectory = os.homedir();

console.log(`Your home directory is: ${homeDirectory}`);

const osPlatform = os.platform();

console.log(`The OS platform is: ${osPlatform}`);

const cpuCores = os.cpus();

const coreCount = cpuCores.length;

const cpuMode1 = cpuCores[0].model;

console.log(`I can see your ${cpuMode1} has ${coreCount} cores`);
