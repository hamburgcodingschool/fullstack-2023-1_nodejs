const prompt = require("prompt-sync")();

console.log("Hey dude.");
const name = prompt(" What's your name?");

// Using concatenation
// console.log("Hello " + name + " your name has " + name.length + " letter(s)");

// Using a template literal
console.log(`Hello ${name} your name has ${name.length} letter(s)`);