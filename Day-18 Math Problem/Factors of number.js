let n = 100;

for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) {
        console.log(i); 
    }
}

for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
    if (n % i == 0 && i !== n / i) {
        console.log(n / i);
    }
}
