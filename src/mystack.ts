import { Node } from "./LinkedList";

export class MyStack{
    private top: Node;
    private min: Node;
    pop() {
        if(this.top == null) {
            throw new Error("EmptyStackException");
        }
        let item = this.top.data;
        this.top = this.top.next;
        if (this.top != null && this.min.data === item) {
            this.min = this.top.getMin();
        }
        if (this.top == null) {
            this.min = null;
        }

        return item;
    }
    push(item:any) {
        let t = new Node(item);
        t.next = this.top;
        this.top = t;
        if (this.min && this.top.data < this.min.data) {
            this.min = this.top;
        }
        if (this.min == null) {
            this.min = this.top;
        }
    }
    peak() {
        if (this.top == null) {
            throw new Error("EmptyStackException");
        }
        return this.top.data;
    }
    isEmpty() {
        return this.top == null;
    }
    /**
     * 3.2
     * Stack Min: How would you design a stack which, in addition to push and
     * pop, has a function min which returns the minimum element? Push, pop and
     * min should all operate in 0(1) time.
     */
    getMin() {
        return this.min.data;
    }
}
