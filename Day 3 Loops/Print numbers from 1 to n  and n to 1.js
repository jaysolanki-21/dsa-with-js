//Print numbers from 1 to n  and n to 1.js

let prompt = require('prompt-sync')();

let n = Number(prompt('Enter n: '));

if (n <= 0 || isNaN(n)) {
    console.log('Invalid input');
    return;
}

let option = prompt('Enter 1 to print numbers from 1 to n, or 2 to print from n to 1: ');

if (option === '1') {
    printNumbers1ToN(n);
} else if (option === '2') {
    printNumbersNTo1(n);
} else {
    console.log('Invalid option');
}

function printNumbers1ToN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

function printNumbersNTo1(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}
