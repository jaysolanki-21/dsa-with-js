let prompt = require('prompt-sync')();
let number = Number(prompt("Enter the number: "));
for (let i = 1; i <= number; i++) {
    let ch = 65;
    for(let j = 1; j <= i; j++){ 
        process.stdout.write(String.fromCharCode(ch)+" ");
        ch++;
    }
    console.log();
}

//-------------------------------------------
// Output
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 
//-------------------------------------------