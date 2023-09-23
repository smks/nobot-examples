// When you run a script, it's being treated as its own process.
// Each process in your machine has its own unique identifier (PID)
// This is the pid for this script
console.log(`This is the pid: ${process.pid}`);

process.on('exit', (code) => {
  console.log(`The process has now finished, exiting code: ${code}`);
});
