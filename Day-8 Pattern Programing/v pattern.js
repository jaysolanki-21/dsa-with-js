let prompt = require('prompt-sync')();
let number = Number(prompt("Enter the number: "));

for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number * 2; j++) {
        if (j === i || j === number * 2 - i + 1) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    console.log();
}
