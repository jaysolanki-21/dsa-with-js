## Introduction

A **Linked List** is a linear data structure where each element (called a node) contains two parts:
- **Data**: The value stored in the node.
- **Next**: A reference to the next node in the sequence.

---

## Node Structure

Each node consists of:
- \`data\`: The value stored.
- \`next\`: A pointer to the next node.

---

## LinkedList Class Operations

### 1. insertAtFirst(data)
- Adds a new node at the beginning of the list.
- The new node's \`next\` points to the current head.
- The new node becomes the new head.

### 2. insertAtLast(data)
- Adds a new node at the end of the list.
- Traverses to the last node and sets its \`next\` to the new node.

### 3. insertAtPosition(data, position)
- Inserts a new node at the specified position (1-based index).
- Traverses to the (position - 1) node.
- Inserts the new node between existing nodes.

---

## Deletion Methods

### 4. deleteFirst()
- Removes the first node by updating the head to point to the next node.

### 5. deleteLast()
- Traverses to the second last node.
- Sets its \`next\` to \`null\`, removing the last node.

### 6. deletePosition(position)
- Removes a node from a specified position.
- Traverses to the (position - 1) node.
- Skips the next node by adjusting pointers.

---

## Traversal

### 7. print()
- Iterates through the linked list.
- Prints each node’s data value.

---

## Example Execution Flow

1. Insert 10 at the beginning → List: \`10\`
2. Insert 20 at the beginning → List: \`20 -> 10\`
3. Insert 30 at the beginning → List: \`30 -> 20 -> 10\`
4. Insert 40 at the end → List: \`30 -> 20 -> 10 -> 40\`
5. Insert 50 at position 3 → List: \`30 -> 20 -> 50 -> 10 -> 40\`
6. Delete first node → List: \`20 -> 50 -> 10 -> 40\`
7. Delete last node → List: \`20 -> 50 -> 10\`
8. Delete node at position 2 → List: \`20 -> 10\`

---