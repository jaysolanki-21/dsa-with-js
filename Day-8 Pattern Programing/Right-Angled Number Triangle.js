let prompt = require ('prompt-sync')();
let number = Number(prompt("Enter the number: "))
for(let i = 1; i <= number; i++){
    for(let j= 1;j<=i;j++){
        process.stdout.write(j+" ");
    }
    console.log();
}

//-----------------------------------------------
// Output
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
//-----------------------------------------------