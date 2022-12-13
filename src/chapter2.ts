import { EloquentJavascriptExercises } from "./eloquentjavascript";
import { Node } from "./LinkedList";
import  { PrependAdder, LinkedListAdder } from './linkedListAdder';

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
                newLinkedList.prepend(node.next.data);
            } else {
                newLinkedList.appendToTail(node.next.data);
            }

            node = node.next;
        }
        return newLinkedList;
    }
    /**
     * 2.5
     * Sum Lists: You have two numbers represented by a linked list, where each node contains a single
     * digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
     * function that adds the two numbers and returns the sum as a linked list.
     * EXAMPLE
     * Input:(7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
     * Output: 2 -> 1 -> 9. That is, 912.
     * FOLLOW UP
     * Suppose the digits are stored in forward order. Repeat the above problem.
     * EXAMPLE
     * lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
     * Output: 9 -> 1 -> 2. That is, 912.
     */
    sumLists(node1: Node, node2: Node, linkedListAdder: LinkedListAdder) {
        let carry = 0;
        let arraySum = [];

        let {newNode1, newNode2 } = this.addZeros(node1, node2);
        while(newNode1 != null && newNode2 != null) {
            let sum = newNode1.data + newNode2.data + carry;
            if (sum >= 10) {
                arraySum.push(sum % 10);
                carry = 1;
            } else {
                arraySum.push(sum);
                carry = 0;
            }
            newNode1 = newNode1.next;
            newNode2 = newNode2.next;
        }
        if (carry > 0) {
            arraySum.push(carry);
        }

        return Node.arrayToList(arraySum, linkedListAdder);
    }

    addZeros(node1: Node, node2: Node) {
        let length1 = node1.len();
        let length2 = node2.len();
        let difference = length1 - length2;
        if (difference < 0) {
            this.addNumberToLinkedList(node1, 0, Math.abs(difference));
        }
        if (difference > 0) {
            this.addNumberToLinkedList(node2, 0, Math.abs(difference));
        }
        return { newNode1: node1, newNode2: node2 }
    }

    addNumberToLinkedList(node: Node, number: number, times: number) {
        for (let i = 0; i < Math.abs(times); i++) {
            node.appendToTail(number);
        }
    }
    sumListsForwardOrder(node1: Node, node2: Node): Node {
        node1.revert();
        node2.revert();
        var prependAdder = new PrependAdder();
        return this.sumLists(node1, node2, prependAdder);
    }
    /**
     * 2.6
     * Palindrome: Implement a function to check if a linked list is a
     * palindrome
     */
    isPalindrome(linkedList: Node): Boolean {
        let node = new Node(linkedList.data)
        node.next = linkedList.next;
        linkedList.revert();
        while(node != null) {
            if (node.data.toLowerCase() != linkedList.data.toLowerCase()) {
                return false;
            }
            node = node.next;
            linkedList = linkedList.next;
        }
        return true;
    }
    /**
     * 2.7
     * Intersection: Given two (singly) linked lists, determine if the two
     * lists intersect. Return the intersecting node. Note that the
     * intersection is defined based on reference, not value. That is, if the
     * kth node of the first linked list is the exact same node (by reference)
     * as the jth node of the second linked list, then they are intersecting.
     */
    isIntersection(node1: Node, node2: Node): Node {
        let pointer: Node;
        let len2 = node2.len();
        while (node1 != null) {
            pointer = node2;
            for (let i = 0; i < len2; i++) {
                if (node1 === pointer) {
                    return pointer;
                }
                pointer = pointer.next;
            }
            node1 = node1.next;
        }
        return null;
    }
}
