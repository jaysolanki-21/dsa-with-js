//------------------
// Type 1
//------------------
function gcd(a,b){
    if(b==0) return a;
    return gcd(b,a%b);
}

console.log(gcd(24,16));
//------------------
// Type 2
//------------------
function gcd(a,b){
    if(a==b) return a;
    if(a>b) return gcd(a-b,b);
    return gcd(a,b-a);
}

console.log(gcd(24,16));