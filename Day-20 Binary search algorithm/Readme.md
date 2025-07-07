# DSA With JS - Day 13: Binary Search 🔍

This day focuses on understanding and implementing **Binary Search**, a fundamental algorithm used to efficiently find elements in sorted arrays. Binary Search significantly reduces time complexity compared to linear search, making it essential in DSA.

---

## ✅ Topic Completed: Binary Search

---

## 📌 What I Learned

- Binary Search works only on **sorted arrays**.
- It uses the **divide and conquer** approach by repeatedly dividing the search interval in half.
- Two main ways to implement Binary Search:
  - **Iterative Binary Search**
  - **Recursive Binary Search**
- How to calculate the `mid` index correctly:
  ```js
  let mid = Math.floor((low + high) / 2);
