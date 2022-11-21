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
    /**
    * 2.3
    * Delete Middle Node: Implement an algorithm to delete a node in the middle
    * (i.e., any node but the first and last node, not necessarily the exact
    * middle) of a singly linked list, given only access to that node.
    */
    deleteMiddleNode(head: Node) {
        let runner = head;
        let node = head;
        while (runner.next != null) {
            if (!runner.next.next) {
                break;
            }
            runner = runner.next.next;
            node = node.next;
        }
        return head.deleteNode(head, node.data)
    }
    /**
     * 2.4
     * Partition: Write code to partition a linked list around a value x, such
     * that all nodes less than x come before all nodes greater than or equal
     * to x. If x is contained within the list, the values of x only need to be
     * after the elements less than x (see below). The partition element x can
     * appear anywhere in the "right partition"; it does not need to appear
     * between the left and right partitions.
     * EXAMPLE
     * Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
     * Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
     */
    partition(head: Node, partition: number) {
        let node = head;
        if (node == null) {
            return null;
        }
        let newLinkedList = new Node(node.data);
        while (node.next != null) {
            if (node.next.data < partition) {
                newLinkedList = newLinkedList.prepend(newLinkedList, node.next.data);
            } else {
                newLinkedList.appendToTail(node.next.data);
            }

            node = node.next;
        }
        return newLinkedList;
    }

}
