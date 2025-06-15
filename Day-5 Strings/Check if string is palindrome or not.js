//Check if string is palindrome or not

let prompt = require('prompt-sync')();
let str = prompt("Enter a string: ");

let i = 0;
let j = str.length-1;
let flag = true;

while(i<j){
    if(str[i] != str[j]){
        flag  = false;
        break;
    }
    i++;
    j--;
}

flag ? console.log("String is palindrome") : console.log("String is not palindrome");

    