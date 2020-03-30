process.stdout.write('Type something then press Return ');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
	if (chunk !== null) {
        process.stdout.write(`You entered ${chunk}`);
        process.stdout.write(`Process ${process.pid} has been running for ${process.uptime()} seconds. \n`);
        process.on('exit', (code) => {
            console.log(`Exiting process now with code ${code}`);
            process.exit(code);
        })
    }
});