# 📦 DSA With JS - Day 6: Advanced Arrays

This repository contains JavaScript problems focused on **Advanced Array Operations** as part of a daily DSA challenge.

---

## 📅 Day 6 - Advanced Arrays

---

### 🔄 Array Rotations

---

#### ⬅️ Left Rotation by One Element

**Description**: Rotate an array to the left by one position.

- **Input**: `[1, 2, 3, 4, 5]`
- **Output**: `[2, 3, 4, 5, 1]`
- **Technique**: **Brute Force Rotation**

---

#### 🔁 Left Rotation by K Elements

**Description**: Rotate an array to the left by `k` positions.

- **Input**: `[1, 2, 3, 4, 5]`, `k = 2`
- **Output**: `[3, 4, 5, 1, 2]`
- **Technique**: **Brute Force with Loop**
- 🧩 Similar: [LeetCode 189. Rotate Array](https://leetcode.com/problems/rotate-array/)

---

#### ➡️ Right Rotation by One Element

**Description**: Rotate an array to the right by one position.

- **Input**: `[1, 2, 3, 4, 5]`
- **Output**: `[5, 1, 2, 3, 4]`
- **Technique**: **Right Shift Rotation**

---

#### 🔂 Right Rotation by K Elements

**Description**: Rotate an array to the right by `k` positions.

- **Input**: `[1, 2, 3, 4, 5]`, `k = 2`
- **Output**: `[4, 5, 1, 2, 3]`
- **Technique**: **Brute Force with Loop**
- 🧩 Similar: [LeetCode 189. Rotate Array](https://leetcode.com/problems/rotate-array/)

---

### 🔗 Merging and Sorting

---

#### 🔀 Merge Two Sorted Arrays

**Description**: Merge two sorted arrays into one sorted array.

- **Input**: `[1, 5, 9]`, `[2, 3, 4, 6, 7]`
- **Output**: `[1, 2, 3, 4, 5, 6, 7, 9]`
- **Technique**: **Two Pointer Approach**
- 🧩 Similar: [LeetCode 88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

---

### 🧹 Clean-Up Operations

---

#### 🚫 Remove Duplicates from Sorted Array

**Description**: Remove duplicates in-place from a sorted array.

- **Input**: `[0, 0, 1, 1, 2, 2]`
- **Output**: `[0, 1, 2]`
- **Technique**: **Two Pointer (slow/fast)**
- 🧩 LeetCode 26. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

---

#### 🔁 Sort 0s, 1s and 2s

**Description**: Sort an array of 0s, 1s, and 2s in linear time.

- **Input**: `[0, 1, 1, 0, 2, 2, 1, 1, 0, 0, 1]`
- **Output**: `[0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]`
- **Technique**: **Dutch National Flag Algorithm (Three Pointers)**
- 🧩 LeetCode 75. [Sort Colors](https://leetcode.com/problems/sort-colors/)

---

### 🚀 Additional Problems Solved

---

#### 📈 Maximum Subarray (Kadane's Algorithm)

**Description**: Find the contiguous subarray with the largest sum.

- **Input**: `[-2,1,-3,4,-1,2,1,-5,4]`
- **Output**: `6`
- **Technique**: **Kadane's Algorithm**
- 🧩 LeetCode 53. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

---

#### 🗳️ Majority Element

**Description**: Find the element that appears more than ⌊n/2⌋ times.

- **Input**: `[2, 2, 1, 1, 1, 2, 2]`
- **Output**: `2`
- **Technique**: **Boyer-Moore Voting Algorithm**
- 🧩 LeetCode 169. [Majority Element](https://leetcode.com/problems/majority-element/)

---

#### 💹 Best Time to Buy and Sell Stock

**Description**: Find the maximum profit by choosing a single buy and sell day.

- **Input**: `[7,1,5,3,6,4]`
- **Output**: `5`
- **Technique**: **One-Pass Minimum Tracking**
- 🧩 LeetCode 121. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

---

## 📚 Key Learnings

- ✔️ Mastered Left/Right Array Rotations
- ✔️ Applied Two Pointer Technique in Merging & Duplicates
- ✔️ In-place modifications for memory efficiency
- ✔️ Hands-on with Dutch National Flag Algorithm
- ✔️ Optimized Subarray and Stock Profit problems
- ✔️ Learned Boyer-Moore Voting Algorithm for Majority Element

---

## 🔗 How to Run

1. Install `prompt-sync` for input-based files:
   ```bash
   npm install prompt-sync
2. Run your JavaScript files using Node:

   ```bash
   node filename.js

