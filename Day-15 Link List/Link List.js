class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtFirst(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtLast(data){
        let newNode = new Node(data);
        let temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = newNode;
    }

    insertAtPosition(data, position){
        let newNode = new Node(data);
        let temp = this.head;
        let count = 1;
        while(count < position-1){
            temp = temp.next;
            count++;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }

    deleteFirst(){
        this.head = this.head.next;
    }

    deleteLast(){
        let temp = this.head;
        while(temp.next.next != null){
            temp = temp.next;
        }
        temp.next = null;
    }

    deletePosition(position){
        let temp = this.head;
        let count = 1;
        while(count < position-1){
            temp = temp.next;
            count++;
        }
        temp.next = temp.next.next;
    }


    print(){
        let temp = this.head;
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let ll = new LinkedList();
ll.insertAtFirst(10);
ll.insertAtFirst(20);
ll.insertAtFirst(30);
ll.print();
ll.insertAtLast(40);
ll.print();
ll.insertAtPosition(50, 3);
ll.print();
ll.deleteFirst();
ll.deleteLast();
ll.deletePosition(2);
ll.print();