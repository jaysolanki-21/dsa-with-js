//factorial of a number.js

let prompt = require('prompt-sync')();

let n = Number(prompt('Enter n: '));

if (n <= 0 || isNaN(n)) {
    console.log('Invalid input');
    return;
}

let fact = 1;
Factorial(n);
function Factorial(n) {
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log('Factorial of ' + n + ' is: ' + fact);
}