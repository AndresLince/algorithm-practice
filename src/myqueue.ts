class QueueNode{
    public data: any;
    public next: QueueNode;
    constructor(data: any) {
        this.data = data;
    }
}
export class MyQueue{
    private first: QueueNode;
    private last: QueueNode;
    add(data: any): void {
        const node = new QueueNode(data);
        if (this.last != null) {
            this.last.next = node;
        }
        this.last = node
        if (this.first == null) {
            this.first = this.last;
        }
    }
    remove() {
        if (this.first == null) {
            throw new Error("NoSuchElementException");
        }
        const data = this.first.data;
        this.first = this.first.next;
        if (this.first == null) {
            this.last == null;
        }
        return data;
    }
    peek() {
        if (this.first == null) {
            throw new Error("NoSuchElementException");
        }
        return this.first.data;
    }
    isEmpty() {
        return this.first == null;
    }
}