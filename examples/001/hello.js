const args = process.argv.slice(2);
const [name] = args;

if (name == undefined) {
    console.error('Please enter a name. ex.: node hello.js Trevor');
    process.exit(0);
}

console.log(`Guten Morgen, ${name}!`);