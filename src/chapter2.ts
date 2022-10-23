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
}
