// sum of n natural numbers.js

let prompt = require('prompt-sync')();

let n = Number(prompt('Enter n: '));

if (n <= 0 || isNaN(n)) {
    console.log('Invalid input');
    return;    
}

let sum = 0;
SumOfNaturalNumbers(n);
function SumOfNaturalNumbers(n) {
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log('Sum of first ' + n + ' natural numbers is: ' + sum);
}
