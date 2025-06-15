// Sum of digits of a number.js

let prompt = require('prompt-sync')();

let n = Number(prompt('Enter n: '));

if (n <= 0 || isNaN(n)) {
    console.log('Invalid input');
    return;
}

let sum = 0;
sumOfDigits(n);
function sumOfDigits(n) {
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    console.log('Sum of digits of is: ' + sum);
}