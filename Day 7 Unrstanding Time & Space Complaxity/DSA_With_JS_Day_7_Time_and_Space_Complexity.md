
# DSA With JS - Day 7: Time and Space Complexity

Understanding Time and Space complexity is essential in writing efficient algorithms. This guide explains common types of time complexities and introduces space complexity with real JavaScript examples.

## 🕒 Time Complexity

Time Complexity describes how the runtime of an algorithm changes as the size of the input increases. Common notations include:

- O(1) – Constant Time
- O(n) – Linear Time
- O(n^2) – Quadratic Time
- O(log n) – Logarithmic Time
- O(2^n) – Exponential Time

### 🟢 Constant Time – O(1)

The algorithm performs a single operation regardless of input size.

```javascript
function getFirstElement(arr) {
    return arr[0];
}

function isEven(num) {
    return num % 2 === 0;
}
```

### 🔵 Linear Time – O(n)

The algorithm iterates through the entire input once.

```javascript
function printAllElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```

### 🟣 Quadratic Time – O(n^2)

Often results from nested iterations over the input.

```javascript
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

### 🟠 Logarithmic Time – O(log n)

Input size is reduced by half each time (e.g., binary search).

```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

### 🔴 Exponential Time – O(2^n)

Growth doubles with each additional input. Common in recursion-heavy problems.

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

## 💾 Space Complexity

Space Complexity measures the amount of memory used by an algorithm in terms of the input size.

### Example – O(1) Space

```javascript
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
} // Only one variable used -> O(1)
```

### Example – O(n) Space

```javascript
function doubleValues(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
} // Uses extra space equal to input size -> O(n)
```

## 📚 Summary

| Complexity    | Time    | Space   | Example              |
|---------------|---------|---------|----------------------|
| Constant     | O(1)    | O(1)    | Accessing first element|
| Linear       | O(n)    | O(n)/O(1)| Looping once         |
| Quadratic    | O(n^2)  | O(1) or O(n)| Nested loops        |
| Logarithmic  | O(log n)| O(1)    | Binary Search        |
| Exponential  | O(2^n)  | Depends | Fibonacci Recursion  |

This document gives you a theoretical base with practical JavaScript examples to help understand time and space complexity. It’s important to analyze both when designing scalable and optimized solutions.
