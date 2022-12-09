import { LinkedListAdder } from "./linkedListAdder";

export class Node{
    next: Node = null;
    data: any;
    constructor(data: any) {
        this.data = data;
    }
    appendToTail(newData: any): void{
        let end: Node = new Node(newData);
        let n: Node = this;
        while(n.next != null) {
            n = n.next;
        }
        n.next = end;
    }

    deleteNode(head: Node, data: any) {
        if (head == null) {
            return null;
        }
        let node = head;
        if (node.data == data) {
            return head.next;
        }
        while(node.next != null) {
            if (node.next.data == data) {
                node.next = node.next.next;
                return head;
            }
            node = node.next;
        }
        return head;
    }
    toArray(node: Node) {
        let newArray = [];
        while(node != null) {
            newArray.push(node.data);
            node = node.next;
        }
        return newArray;
    }
    prepend(data: any) {
        let newHead = new Node(data);
        let newTail = new Node(0);
        newTail.data = this.data;
        newTail.next = this.next;
        newHead.next = newTail;
        this.data = newHead.data;
        this.next = newHead.next;
    }
    nth(node: Node, position: number): Node {
        if(node == null) {
            return null;
        }

        let counter = 0;
        while(node != null) {
            if (counter == position) {
                return node;
            }
            node = node.next;
            counter++;
        }
        return null;
    }
    len() {
        let counter = 0;
        let n: Node = this;
        while (n != null) {
            counter++;
            n = n.next;
        }
        return counter;
    }
    print() {
        console.log("------------");
        let n: Node = this;
        while (n != null) {
            console.log(n.data);
            n = n.next;
        }
    }
    revert() {
        let head: Node = new Node(this.data)
        head.next = this.next;
        let newNode = new Node(head.data)
        while (head.next != null) {
            newNode.prepend(head.next.data);
            head = head.next;
        }
        this.next = newNode.next;
        this.data = newNode.data;
    }
    static arrayToList(array: Array<number>, linkedListAdder: LinkedListAdder) {
        let node: Node = new Node(array[0]);
        for (let i = 1; i < array.length; i++) {
            linkedListAdder.addToResult(node, array[i]);
        }
        return node;
    }
}
