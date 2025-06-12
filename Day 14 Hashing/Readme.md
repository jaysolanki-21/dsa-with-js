# Day 14: Hashing — Set and Map in JavaScript

Hashing enables fast data lookup and management. In JavaScript, **Set** and **Map** are built-in hash-based data structures that provide efficient ways to store and retrieve data.

---

## Set in JavaScript

A **Set** is a collection of unique values of any type, whether primitive values or object references.

### Common Methods

| Method            | Description                          |
|-------------------|--------------------------------------|
| `add(value)`      | Adds a value to the set              |
| `delete(value)`   | Removes a value from the set         |
| `has(value)`      | Checks if a value exists in the set  |
| `size`            | Returns the number of elements       |
| `clear()`         | Removes all elements                 |

### Example

```js
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, ignored
console.log(mySet.has(2)); // true
mySet.delete(1);
console.log(mySet.size); // 1
mySet.clear();
console.log(mySet.size); // 0
```

---

## Map in JavaScript

A **Map** is a collection of keyed data items, just like an Object. But the keys can be of any type.

### Common Methods

| Method            | Description                          |
|-------------------|--------------------------------------|
| `set(key, value)` | Adds or updates a key-value pair     |
| `get(key)`        | Retrieves the value by key           |
| `has(key)`        | Checks if a key exists               |
| `delete(key)`     | Removes a key-value pair             |
| `size`            | Returns the number of pairs          |
| `clear()`         | Removes all key-value pairs          |

### Example

```js
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.get('a')); // 1
myMap.set('a', 3); // Update value
console.log(myMap.has('b')); // true
myMap.delete('b');
console.log(myMap.size); // 1
myMap.clear();
console.log(myMap.size); // 0
```

---

## When to Use Set vs Map

| Use Case                | Use Set           | Use Map                 |
|-------------------------|-------------------|-------------------------|
| Unique values           | Yes               | No                      |
| Key-value pairs         | No                | Yes                     |
| Key can be any type     | No (values only)  | Yes                     |
| Fast lookup, insert     | Yes               | Yes                     |

---

## Summary

- **Set** is ideal for storing unique values.
- **Map** is ideal for storing key-value pairs.
- Both provide efficient O(1) operations for add, delete, and lookup due to hashing.

---
