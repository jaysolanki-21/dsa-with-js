let a = 11, b = 22;
let c = a + b + a++ + b++ + ++a + ++b;
console.log("a = " + a);// Output: 13
console.log("b = " + b);// Output: 24
console.log("c = " + c);// Output: 103

