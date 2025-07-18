class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());