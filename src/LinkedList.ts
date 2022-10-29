export class Node{
    next: Node = null;
    data: number;
    constructor(data: number) {
        this.data = data;
    }
    appendToTail(newData: number): void{
        let end: Node = new Node(newData);
        let n: Node = this;
        while(n.next != null) {
            n = n.next;
        }
        n.next = end;
    }

    deleteNode(head: Node, data: number) {
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
    prepend(node: Node, data: number) {
        let head = new Node(data);
        head.next = node;
        return head;
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
}
