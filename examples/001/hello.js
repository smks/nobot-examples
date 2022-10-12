/* eslint-disable linebreak-style */
const args = process.argv.splice(2);
const [fname] = args;
// const args = process.argv.splice(2);
// const fname = args[0];

if (fname === undefined) {
  console.error('Please pass a name, e.g., node hello.js Arie!');
  process.exit(0);
}
console.log(`Good day, to you, ${fname}!`);

