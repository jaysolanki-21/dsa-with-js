//Repeat Hello
let prompt = require('prompt-sync')();

let n = Number(prompt('Enter n: '));

if (n <= 0 || isNaN(n)) {
    console.log('Invalid input');
    return;
}

do {
    console.log('Hello World');
    n--;
} while (n > 0);
