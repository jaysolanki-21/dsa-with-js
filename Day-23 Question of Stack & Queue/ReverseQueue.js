class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items.join(" <- "));
    }

    reverse() {
        let stack = [];

        while (!this.isEmpty()) {
            stack.push(this.dequeue());
        }

        while (stack.length > 0) {
            this.enqueue(stack.pop());
        }
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log("Original Queue:");
q.print();

q.reverse();
console.log("Reversed Queue:");
q.print();
