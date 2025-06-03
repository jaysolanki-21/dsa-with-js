# Bubble Sort in JavaScript

## Overview

Bubble Sort is one of the simplest sorting algorithms used in computer science. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

## How It Works

The algorithm works by comparing pairs of adjacent elements and moving the larger (or smaller, depending on sort order) element toward the end of the list. With each pass through the array, the next-largest element "bubbles" up to its correct position.

This method is known for its simplicity but is not efficient for large datasets due to its high time complexity.

## Why Use Bubble Sort?

Although Bubble Sort is not suitable for performance-critical applications, it is a great way to understand basic algorithmic concepts such as:

- Nested loops
- Element comparison
- Swapping values
- Iterative problem solving

It's often used in educational contexts to teach sorting fundamentals.

## Performance

| Case        | Time Complexity |
|-------------|-----------------|
| Best Case   | O(n)            |
| Average Case| O(n²)           |
| Worst Case  | O(n²)           |

- **Space Complexity:** O(1) – Bubble Sort is an in-place sorting algorithm.
- **Stable Sort:** Yes – Equal elements retain their relative order after sorting.

## When to Use

- For educational purposes to understand basic sorting.
- When working with very small datasets where performance is not a concern.
- When a simple, readable sorting approach is preferred over efficiency.

## Learning Goals

Implementing Bubble Sort in JavaScript helps reinforce concepts such as:

- Array manipulation
- Loop control (e.g., `for` and `while`)
- Algorithm optimization (early exit strategies)
- Performance analysis

## Notes

For better performance with real-world applications, consider more efficient sorting algorithms like Merge Sort, Quick Sort, or built-in JavaScript methods such as `Array.prototype.sort()` with custom comparator functions.

