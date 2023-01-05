import { MyStack } from "./mystack";
/**
 * 3.4
 * Queue via Stacks: Implement a MyQueue class which implements a queue using
 * two stacks
 */
export class MyQueueWithStacks{
    private myStack1: MyStack;
    private myStack2: MyStack;
    private first: any;
    constructor() {
        this.myStack1 = new MyStack();
        this.myStack2 = new MyStack();
    }
    add(data: any) {
        this.first = data;
        this.myStack1.push(data)
    }
    remove() {
        try {
            while (!this.myStack1.isEmpty()) {
                this.myStack2.push(this.myStack1.pop());
            }
            let data = this.myStack2.pop();
            if (!this.myStack2.isEmpty()) {
                this.first = this.myStack2.peak();
            }
            if (this.myStack2.isEmpty()) {
                this.first = null;
            }
            while (!this.myStack2.isEmpty()) {
                this.myStack1.push(this.myStack2.pop());
            }
            return data;
        } catch (error) {
            throw new Error("NoSuchElementException");
        }
    }
    peek(): any {
        if (!this.first) {
            throw new Error("NoSuchElementException");
        }
        return this.first;
    }
    isEmpty(): boolean {
        return this.myStack1.isEmpty();
    }
}