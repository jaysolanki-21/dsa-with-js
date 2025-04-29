//Reverse of a number

let prompt = require('prompt-sync')();

let n = Number(prompt('Enter n: '));

if (n <= 0 || isNaN(n)) {
    console.log('Invalid input');
    return;
}

let rev = 0;

reverse(n);
function reverse(n) {
    while (n > 0) {
        rev = rev * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    console.log('Reverse Number is: ' + rev);
}
