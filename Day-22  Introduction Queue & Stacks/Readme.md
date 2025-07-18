
# Data Structures: Stack, Queue, and Deque

---

## 1. Queue (FIFO - First In First Out)

### Definition:
A Queue is a linear data structure where the first element added is the first one to be removed.

### Common Methods:
| Method      | Description                      |
|-------------|----------------------------------|
| enqueue()   | Add element to the rear          |
| dequeue()   | Remove element from the front    |
| front()     | View the front element           |
| isEmpty()   | Check if the queue is empty      |
| size()      | Get the number of elements       |
| print()     | Display all elements             |





---

## 2. Stack (LIFO - Last In First Out)

### Definition:
A Stack is a linear data structure where the last element added is the first one to be removed.

### Common Methods:
| Method     | Description                      |
|------------|----------------------------------|
| push()     | Add element to the top           |
| pop()      | Remove element from the top      |
| peek()     | View the top element             |
| isEmpty()  | Check if the stack is empty      |
| size()     | Get the number of elements       |
| print()    | Display all elements             |





---

## 3. Deque (Double-Ended Queue)

### Definition:
A Deque allows insertion and deletion from both ends (front and rear).

### Common Methods:
| Method         | Description                          |
|----------------|--------------------------------------|
| pushFront()    | Add element to the front             |
| pushRear()     | Add element to the rear              |
| popFront()     | Remove element from the front        |
| popRear()      | Remove element from the rear         |
| front()        | View the front element               |
| rear()         | View the rear element                |
| isEmpty()      | Check if deque is empty              |
| size()         | Get number of elements               |
| print()        | Display all elements                 |


---

## Summary Comparison:

| Feature        | Queue         | Stack         | Deque                      |
|----------------|---------------|---------------|----------------------------|
| Insert Front   | No            | No            | Yes - pushFront()         |
| Insert Rear    | Yes - enqueue()| Yes - push()  | Yes - pushRear()          |
| Remove Front   | Yes - dequeue()| No           | Yes - popFront()          |
| Remove Rear    | No            | Yes - pop()   | Yes - popRear()           |
| Order          | FIFO          | LIFO          | Both ends (Double-ended)  |
