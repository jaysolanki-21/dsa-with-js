//Strong Number

let prompt = require('prompt-sync')();

let n = Number(prompt('Enter n: '));

if (n <= 0 || isNaN(n)) {
    console.log("Invalid input");
    return;
}

let sum = 0;

StrongNumber(n);
function StrongNumber(n) {
    
    let temp = n;
    while (temp > 0) {
        let ans = 1;
        let rem = temp % 10;
        for(let i = 1; i <= rem; i++) {
            ans = ans * i
        }
        sum += ans;
        temp = Math.floor(temp / 10);
    }
    if (sum === n) {
        console.log(n + ' is a Strong Number');
    } else {
        console.log(n + ' is not a Strong Number');
    }
}