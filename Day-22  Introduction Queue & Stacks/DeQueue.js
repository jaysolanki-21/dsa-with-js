class DeQueue {
    constructor() {
        this.queue = [];
    }

    // Insert at the rear
    enqueueRear(item) {
        this.queue.push(item);
    }

    // Insert at the front
    enqueueFront(item) {
        this.queue.unshift(item);
    }

    // Remove from the front
    dequeueFront() {
        if (!this.isEmpty()) {
            return this.queue.shift();
        }
        return null;
    }

    // Remove from the rear
    dequeueRear() {
        if (!this.isEmpty()) {
            return this.queue.pop();
        }
        return null;
    }

    // Peek front
    front() {
        return this.isEmpty() ? null : this.queue[0];
    }

    // Peek rear
    rear() {
        return this.isEmpty() ? null : this.queue[this.queue.length - 1];
    }

    // Check if the DeQueue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Return size of the DeQueue
    size() {
        return this.queue.length;
    }

    // Display queue (for debugging)
    print() {
        console.log(this.queue);
    }
}


const deQueue = new DeQueue();
deQueue.enqueueRear(1);
deQueue.enqueueRear(2);
deQueue.enqueueRear(3);
deQueue.enqueueFront(4);
deQueue.enqueueFront(5);
deQueue.print();
