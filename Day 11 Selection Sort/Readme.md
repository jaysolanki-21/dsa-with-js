# Selection Sort in JavaScript

## Overview

Selection Sort is a simple comparison-based sorting algorithm. It divides the input list into two parts: a sorted sublist of items which is built up from left to right, and a remaining sublist of items to be sorted. The algorithm repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted sublist and moves it to the end of the sorted sublist.

## How It Works

At each step, the algorithm:
1. Searches for the minimum (or maximum) element in the unsorted portion.
2. Swaps it with the first unsorted element.
3. Advances the boundary between the sorted and unsorted portions.

This process continues until the entire list is sorted.

## Why Use Selection Sort?

While not the most efficient for large datasets, Selection Sort is:
- Easy to understand and implement
- Useful for educational purposes
- Predictable in performance due to consistent time complexity

Unlike some other simple sorting algorithms, it performs a minimal number of swaps.

## Performance

| Case        | Time Complexity |
|-------------|-----------------|
| Best Case   | O(n²)           |
| Average Case| O(n²)           |
| Worst Case  | O(n²)           |

- **Space Complexity:** O(1) – It is an in-place sorting algorithm.
- **Stable Sort:** No – Equal elements may be reordered.

## When to Use

- For small datasets
- When memory usage must be minimized
- For educational purposes to learn basic sorting mechanisms

## Learning Goals

Implementing Selection Sort in JavaScript helps build understanding of:
- Array indexing and traversal
- Element comparison and swapping
- Nested loop structures
- Algorithm analysis and complexity

## Notes

Though easy to implement, Selection Sort is inefficient for large datasets and is typically not used in real-world applications. For better performance, consider using Merge Sort, Quick Sort, or JavaScript’s built-in `Array.prototype.sort()`.

