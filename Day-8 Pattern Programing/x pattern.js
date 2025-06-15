let prompt = require('prompt-sync')();
let number = Number(prompt("Enter the number: "));

for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number * 2 - 1; j++) {
        if (j === i || j === (number * 2 - i)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    console.log();
}

for (let i = number - 1; i >= 1; i--) {
    for (let j = 1; j <= number * 2 - 1; j++) {
        if (j === i || j === (number * 2 - i)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    console.log();
}

//-------------------------------------------
// Output
