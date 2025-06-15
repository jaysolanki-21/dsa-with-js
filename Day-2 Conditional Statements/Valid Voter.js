let prompt = require('prompt-sync')();

function ValidVoter(age) {
    if (age >= 18) {
        console.log("You are a valid voter");
    } else {
        console.log("You are not a valid voter");
    }
}
let age = Number(prompt("Enter your age : "));
if (isNaN(age)) {
    console.log("Please enter a valid number for age");
}
else{
    ValidVoter(age);
}
