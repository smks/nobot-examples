process.stdout.write('Hello, I am writing to standard output\n');

process.stdout.write(`Current workind directory ${process.cwd()}\n`);

process.stdout.write('Type something and press enter\n');

process.stdin.read('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    process.stdout.write(`You wrote: ${chunk}`);

    process.exit(0);
  }
});

console.log(`This script has been runnind for ${process.uptime()} seconds`);
