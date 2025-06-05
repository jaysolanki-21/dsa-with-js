# Insertion Sort in JavaScript

## Overview

Insertion Sort is a straightforward and intuitive sorting algorithm that builds the final sorted array one item at a time. It’s similar to how people often sort playing cards by hand — picking one card at a time and placing it in the correct position relative to the already sorted cards.

## How It Works

The algorithm divides the array into a "sorted" and "unsorted" portion. It iterates through the array, taking each element from the unsorted portion and inserting it into its correct position within the sorted portion by shifting larger elements to the right.

## Why Use Insertion Sort?

While not efficient for large datasets, Insertion Sort is valuable in situations where:

- The dataset is small
- The array is nearly sorted
- Memory usage must be kept minimal (in-place sorting)

It’s also a useful algorithm for educational purposes, helping to teach basic sorting mechanics and control flow.

## Performance

| Case        | Time Complexity |
|-------------|-----------------|
| Best Case   | O(n)            |
| Average Case| O(n²)           |
| Worst Case  | O(n²)           |

- **Space Complexity:** O(1) – It sorts the array in place.
- **Stable Sort:** Yes – It preserves the relative order of equal elements.

## When to Use

- For small or nearly sorted datasets
- In low-memory environments
- To teach sorting algorithms in a clear and simple way

## Learning Goals

Implementing Insertion Sort in JavaScript strengthens understanding of:

- Array traversal
- Element comparison and insertion
- Loop control and optimization
- Algorithmic thinking and performance trade-offs

## Notes

Although Insertion Sort is not optimal for large data, it can outperform more complex algorithms like Quick Sort for small input sizes or nearly sorted arrays. For larger or more complex datasets, consider alternatives like Merge Sort or JavaScript’s built-in `sort()` method.
