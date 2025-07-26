# 📐 Math Problem Descriptions

This README describes a set of mathematical problems and algorithmic techniques used to solve them. These are commonly used in competitive programming, interviews, and algorithm practice.

---

## 1. 🔍 Divisors of a Number

**Problem:**  
Given an integer `n`, find and print all its divisors.

**Description:**  
A number `d` is a divisor of `n` if `n % d == 0`. To optimize the solution, iterate only up to the square root of `n`, as every divisor below the square root has a corresponding divisor above it. This reduces time complexity from O(n) to O(√n). Special care is taken to avoid duplicate printing when `n` is a perfect square.

---

## 2. 🔗 GCD (Greatest Common Divisor)

**Problem:**  
Given two numbers `a` and `b`, find their greatest common divisor (GCD).

**Description:**  
Two common methods are implemented:
- **Type 1 (Euclidean Algorithm using Modulo):** Repeatedly replace `a` with `b`, and `b` with `a % b`, until `b` becomes 0. The result is the GCD.
- **Type 2 (Euclidean Algorithm using Subtraction):** Repeatedly subtract the smaller number from the larger until both numbers are equal. The result is the GCD.

---

## 3. 🔢 Prime Number Sieve

**Problem:**  
Find all prime numbers up to a given number `n`.

**Description:**  
Uses the **Sieve of Eratosthenes**, a classic algorithm to efficiently find all primes less than or equal to `n`. Initially, all numbers are marked as prime. Starting from 2, mark all multiples of each prime as non-prime. This algorithm runs in O(n log log n) time and is ideal for generating primes in bulk.

---

## ✅ Summary

| Topic                 | Description                                          |
|-----------------------|------------------------------------------------------|
| Divisors of a Number  | Find all divisors using √n optimization              |
| GCD - Type 1          | Euclidean algorithm using modulo                     |
| GCD - Type 2          | Euclidean algorithm using subtraction                |
| Prime Number Sieve    | Efficient method to generate primes up to `n`        |

---

## 📘 Notes

These foundational problems help build an understanding of number theory and are commonly used in problems involving divisibility, prime factors, and optimizations based on mathematical properties.

