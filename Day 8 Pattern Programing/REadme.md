# Day 8 - Pattern Programming in JavaScript

## Overview

This collection contains various star (`*`), number, and alphabet patterns commonly used in programming exercises. These patterns help reinforce core programming concepts like loops, conditional logic, and nested structures. Each pattern is implemented in JavaScript and outputs a visually recognizable shape using console output.

---

## Patterns Included

### 1. Descending Right-Aligned Star Pyramid
- A right-aligned triangle with decreasing rows of stars.
- Starts with the maximum number of stars on the top row and reduces by one in each subsequent row.
- Aligned to the right using spaces.

### 2. Equilateral Triangle Star Pattern
- A symmetric triangle where each row has an odd number of stars, centered horizontally.
- Often referred to as a pyramid pattern due to its shape.

### 3. Inverted Right-Angle Triangle
- A right-angled triangle pattern with the right angle at the top-left.
- Each row has one less star than the one above.

### 4. Left-Aligned Inverted Triangle Pattern
- Similar to the inverted right-angle triangle but specifically aligned to the left.
- Visually forms a reversed triangle starting from the left edge.

### 5. Right Angle Triangle
- A simple triangle with the right angle at the bottom-left.
- Increases one star per row.

### 6. Right-Angled Alphabet Pattern
- Outputs letters of the alphabet in a right-angled triangle format.
- Typically starts from 'A' and continues sequentially through the alphabet.

### 7. Right-Angled Number Triangle
- Similar to the alphabet pattern but uses numbers.
- Each row may either repeat the same number or display sequential numbers.

### 8. V Pattern
- Forms a 'V' shape using stars.
- Stars are printed at the diagonals from the top left and right converging at the bottom.

### 9. X Pattern
- Forms an 'X' shape using stars.
- Stars are printed where the row and column indices match or are symmetrical around the center.

---

## Learning Goals

- Strengthen understanding of nested loops
- Practice managing spacing and alignment in console output
- Improve logic for symmetrical and diagonal pattern construction
- Develop an eye for geometric visualization in code

---

## How to Run

1. Clone the repository or copy the script.
2. Install dependencies:

   ```bash
   npm install prompt-sync
   ```
    ```bash
    node <filename>.js
    ```
