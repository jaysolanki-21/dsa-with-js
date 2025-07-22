# Cyclic Sort

Cyclic Sort is a highly efficient in-place sorting algorithm specifically useful when dealing with arrays containing numbers in a specific range — typically from `1` to `n`. It has a linear time complexity of **O(n)** and **constant space** complexity.

## 🚀 When to Use

Use Cyclic Sort when:
- You are given an array of `n` elements with integers ranging from `1` to `n`
- Elements are **not duplicated**
- You want to sort the array in the most space- and time-efficient way

---

## 📚 How It Works

The algorithm places each number at its correct index (`number - 1`) by swapping it with the number currently at that index. It repeats the process until every number is in its correct position.

### Example:

Input: `[3, 1, 5, 4, 2]`  
Output: `[1, 2, 3, 4, 5]`

---

## 🧠 Pseudocode

```plaintext
i = 0
while i < length of array:
    correct_index = array[i] - 1
    if array[i] != array[correct_index]:
        swap array[i] and array[correct_index]
    else:
        i += 1
