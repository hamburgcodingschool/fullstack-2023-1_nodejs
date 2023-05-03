const mathService = require("./mathService");

const name = "Joe";

function greeting() {
    const result = mathService.add(2, 2);
    return `Hello did you know that 2 + 2 is ${result}`;
}

module.exports = {
    name,
    greeting
};