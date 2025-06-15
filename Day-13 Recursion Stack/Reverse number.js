function reverseNumber(n, reversed = 0) {
    if (n === 0) return reversed;
    return reverseNumber(Math.floor(n / 10), reversed * 10 + n % 10);
}

console.log(reverseNumber(123)); 
