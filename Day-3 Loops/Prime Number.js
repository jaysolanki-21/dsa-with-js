// Prime Number.js

let prompt = require('prompt-sync')();

let n = Number(prompt('Enter n: '));

if (n <= 0 || isNaN(n)) {
    console.log('Invalid input');
    return;
}

let flag = 0;
isPrime(n);
function isPrime(n) {

    if(n === 1) {
        console.log(n + ' is not a Prime Number');
        return;
    }

    else if(n === 2) {
        console.log(n + ' is a Prime Number');
        return;
    }
    
    else if(n % 2 === 0) {
        console.log(n + ' is not a Prime Number');
        return;
    }

    for (let i = 3; i <= Math.sqrt(n); i+=2) {
        if (n % i === 0) {
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        console.log(n + ' is a Prime Number');
    } else {
        console.log(n + ' is not a Prime Number');
    }
}