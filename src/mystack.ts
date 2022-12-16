class StackNode {
    public data: any;
    public next: StackNode
    constructor(data: any){
        this.data = data;
    }
}
export class MyStack{
    private top: StackNode;
    pop() {
        if(this.top == null) {
            throw new Error("EmptyStackException");
        }
        let item = this.top.data;
        this.top = this.top.next;
        return item;
    }
    push(item:any) {
        let t = new StackNode(item);
        t.next = this.top;
        this.top = t;
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
}