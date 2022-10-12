/* eslint-disable linebreak-style */
console.log(`This process is PID ${process.pid}`);

process.on('exit', (code) => {
  console.log(`The process has now finished, exiting with CODE ${code}`);
});

process.stdout.write('Hello, I am writing to standard output\n');
process.stdout.write(`The current working directory is ${process.cwd()}\n`);
process.stdout.write(`This script has now run for ${process.uptime()} seconds!\n`);
