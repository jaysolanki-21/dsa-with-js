//Accept values from user and assign to an array.

let prompt = require("prompt-sync")();

let length = Number(prompt("Enter the length of array: "));

let arr = new Array(length);

for (let i = 0; i < arr.length; i++) {
    arr[i] = prompt(`Enter the value of index ${i}: `);
}

console.log(arr);