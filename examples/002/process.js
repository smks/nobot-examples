console.log(`This process is pid ${process.pid}`);

process.on('exit', (code) => {
  console.log(`The process has now finished, exiting with code: ${code}`);
});

process.stdout.write('Hello I am writing to standard output\n');

process.stdout.write(`${process.cwd()}\n`);

const myConsole = {
  log: msg => {
    process.stdout.write(`${msg}\n`);
  },
};

myConsole.log(`This script has been running for ${process.uptime()} seconds`);

process.stdout.write('Type something then hit enter: \n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`You wrote: ${chunk}`);
    process.exit(0);
  }
});
