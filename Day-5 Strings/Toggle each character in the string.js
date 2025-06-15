//Toggle each character in the string

let prompt = require('prompt-sync')();
let str = prompt("Enter a string: ");
let code = 0;
let newStr = "";

for(let i=0; i<str.length; i++){
    code = str.charCodeAt(i);
    if(code >= 65 && code <= 90){
        code += 32;
        newStr += String.fromCharCode(code);
    }
    else if(code >= 97 && code <= 122){
        code -= 32;
        newStr += String.fromCharCode(code);
    }
    else{
        newStr += str[i];
    }
}
console.log(newStr);