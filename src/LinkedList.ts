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

}