let prompt = require('prompt-sync')();
let number = Number(prompt("Enter the number: "))
for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*")
    }
    console.log()
}

//-------------------------------------------
// Output
// *
// **
// ***
// ****
// *****
//-------------------------------------------