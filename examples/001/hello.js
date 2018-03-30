const args = process.argv.slice(2);
const [name] = args;

if (name === undefined) {
  console.log('Please pass a name, e.g. node hello.js Shaun');
  process.exit(1); // 1 indicates failure
}

console.log(`Good day to you, ${name}`);
