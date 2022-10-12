/* eslint-disable linebreak-style */
console.log(`This process is PID ${process.pid}`);

process.on('exit', (code) => {
  console.log(`The process has now finished, exiting with CODE ${code}`);
});

process.stdout.write('Hello, I am writing to standard output\n');
process.stdout.write(`The current working directory is ${process.cwd()}\n`);
process.stdout.write(`This script has now run for ${process.uptime()} seconds!\n`);

process.stdout.write('Type something and hit enter!\n');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`You wrote: ${chunk}`);
    process.exit(0);
  }
});
