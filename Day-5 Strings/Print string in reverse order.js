//Print string in reverse order

let prompt = require('prompt-sync')();
let str = prompt("Enter a string: ");
let rev = "";

for(let i=str.length-1; i>=0; i--){
    rev +=str[i];
}
console.log(rev);