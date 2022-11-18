import { Node } from "./LinkedList";

export class Chapter2 {
    removeDups(head: Node) {
        let n: Node = head;
        const buffer: any = {};
        buffer[n.data] = 1;
        while(n.next != null) {
            if (!buffer[n.next.data]) {
                buffer[n.next.data] = 1;
                n = n.next;
            } else {
                n.next = n.next.next ? n.next.next: null;
            }
        }
        return head;
    }
    /**
     * 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
    */
    kthToLast(head: Node, kth: number) {
        let runner: Node = head;
        let counter = 0;
        // Finding the node with a kth distance from the head
        while(runner.next != null && counter < kth) {
            runner = runner.next;
            counter++;
        }
        if (counter < kth) {
            return null;
        }
        let node: Node = head;
        while (runner.next != null) {
            node = node.next;
            runner = runner.next;
        }
        return node;
    }
}
