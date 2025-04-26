# DSA With JS - Day 1: Basic Logic in JavaScript

Welcome to Day 1 of the **DSA With JS** series! Today’s focus is on strengthening core JavaScript fundamentals like variables, operators, arithmetic operations, and template strings. These basics are the foundation for writing clear and powerful logic in DSA.

---

## 📚 Topic: Basic Logic in JS – Variables, Operators, Operations

### 🧾 Questions Covered

1. ### ➕ Sum of Two Integers
   - **Description:** Add two numbers and print the result.
   - **Concepts Used:** Variable declaration, arithmetic operator (`+`), `console.log()`

2. ### 📝 Sum and Message Using Template String
   - **Description:** Display the sum of two numbers using ES6 template literals.
   - **Concepts Used:** Template literals (`${}`), string interpolation

3. ### 💬 Accept and Print the Answer
   - **Description:** Accept two numbers from the user, calculate their sum, and print it with a message.
   - **Concepts Used:** `prompt-sync` for input, string concatenation, type conversion (`Number()`)

4. ### 🔄 Swap Two Variables (3 Methods)
   - **Method 1:** Using a third variable (temp)
   - **Method 2:** Using arithmetic operations (no temp)
   - **Method 3:** Using array destructuring
   - **Concepts Used:** Variables, memory management, destructuring

---

### ➕ Unary Operator Problems

1. #### ➕ `i = i++ + ++i;`
   - Tests the difference between post-increment and pre-increment behavior.
   - **Output:** `24`

2. #### ➕ Complex Increment Expression
   - `let c = a + b + a++ + b++ + ++a + ++b;`
   - **Output:** `a = 13`, `b = 24`, `c = 103`

3. #### ➕ Boolean Increment
   - `let b = true; b++;`
   - Demonstrates type coercion in JavaScript.
   - **Output:** `2`

---

### 🧮 Basic Math Problems

5. ### 📐 Area and Perimeter of Rectangle
   - **Function:** `rectangle(length, breadth)`
   - **Returns:** Area and perimeter as a tuple/array
   - **Example:** `rectangle(4, 5)` → `[20, 18]`

6. ### 🔢 Generate OTP (6-digit only)
   - **Function:** `generateOTP()`
   - **Returns:** A 6-digit random number
   - **Concepts Used:** `Math.random()`, `Math.floor()`
   - **Example Output:** `654321`

7. ### 🔺 Area of Triangle (Heron’s Formula)
   - **Function:** `heronsArea(a, b, c)`
   - **Concepts Used:** Semi-perimeter, `Math.sqrt()`
   - **Example:** `heronsArea(5, 6, 7)` → `14.70`

8. ### 🔵 Circumference of Circle
   - **Function:** `circumference(radius)`
   - **Formula:** `2 * π * radius`
   - **Output:** Rounded to two decimal places

---

## 📚 Learning Focus

- Variable declaration with `let` and `const`
- Basic arithmetic operations (`+`, `-`, `*`, `/`, `%`)
- Template literals and string concatenation
- Unary operators (`++`, `--`) and their behavior
- Value swapping using variables, math, and destructuring
- Type coercion in JavaScript
- Using `prompt-sync` for input
- Random number generation with `Math.random()`
- Math functions: `Math.floor()`, `Math.sqrt()`, `Math.PI`

---

## 🔗 How to Run

1. Install `prompt-sync` for input-based files:

   ```bash
   npm install prompt-sync
2. Run your JavaScript files using Node:

   ```bash
   node filename.js