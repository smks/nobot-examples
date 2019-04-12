const os = require('os')

const homedir = os.homedir()
const platform = os.platform()
const cpus = os.cpus()

const coreCount = cpus.length
const cpuModel =  cpus[0].model


console.log(`The Home directory of your OS is - ${homedir}`)
console.log(`The Home platform of your OS is - ${platform}`)
console.log(`The total number of cpus you have are - ${coreCount}`)
console.log(`The cpus of your OS are - ${cpuModel}`)