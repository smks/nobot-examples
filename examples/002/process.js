process.stdout.write('Type something then press Return ');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
	if (chunk !== null) {
        process.stdout.write(`You entered ${chunk}`);
        process.stdout.write(`This script has been running for ${process.uptime()} seconds. \n`);
        process.exit(0);
    }
});