// sum up to n using recursion
function sumUpToN(n) {
    if(n==0) return 0;
    return n + sumUpToN(n-1);    
}

let n = 5;
console.log(sumUpToN(n));