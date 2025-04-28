// Print n Hello Worlds.js

let prompt = require('prompt-sync')();
function printHelloWorld(n) {
    if (n <= 0 || isNaN(n)) {
        console.log('Invalid input');
        return;
    }

    for (let i = 1; i <= n; i++) {
        console.log('Hello World');
    }
}

let n = Number(prompt('Enter n: '));
printHelloWorld(n);
