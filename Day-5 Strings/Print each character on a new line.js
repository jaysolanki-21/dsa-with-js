//Print each character on a new line

let prompt = require('prompt-sync')();
let str = prompt("Enter a string: ");

for(ch of str){
    console.log(ch);
}