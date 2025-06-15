// Method 1

let a =5;
let b=10;

let temp = a;
a = b;
b = temp;

console.log(a); // Output: 10
console.log(b); // Output: 5

// Method 2

let a =5;
let b=10;

a = a + b;
b = a - b;
a = a - b;

console.log(a); // Output: 10
console.log(b); // Output: 5

// Method 3

let a =5;
let b=10;

[a, b] = [b, a];

console.log(a); // Output: 10   
console.log(b); // Output: 5
