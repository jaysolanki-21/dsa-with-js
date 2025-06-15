//fibonacci series using recursion
function fibonacci(n,first,second) {
    if (n == 0) return;
    process.stdout.write(`${first + second}, `);
    return fibonacci(n - 1, second, first + second);
  }

  n=5;
  process.stdout.write(`0, 1, `);
fibonacci(n-2,0,1);
 