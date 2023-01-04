import { MyStack } from "./mystack";

export class SetOfStacks {
    /**
     * 3.2
     * Stack of Plates: Imagine a (literal) stack of plates. If the stack gets
     * too high, it might topple. Therefore, in real life, we would likely
     * start a new stack when the previous stack exceeds some threshold.
     * Implement a data structure SetOfStacks that mimics this. SetOfStacks
     * should be composed of several stacks and should create a new stack once
     * the previous one exceeds capacity.
     * SetOfStacks. push() and SetOfStacks. pop() should behave identically to
     * a single stack (that is, pop () should return the same values as it
     * would if there were just a single stack).
     * FOLLOW UP
     * Implement a function popAt ( int index) which performs a pop operation
     * on a specific sub-stack.
     */
    public array: any[] = [];
    public threshold: number;
    public arrayIndex: number = 0;
    constructor(threshold: number) {
        this.threshold = threshold;
    }

    push(data: any): void {
        if (this.arrayIndex == 0 && this.array.length == 0) {
            let stack = new MyStack();
            stack.push(data);
            this.array[this.arrayIndex] = stack;
            return;
        }
        if (this.array[this.arrayIndex].length() == this.threshold) {
            let stack = new MyStack();
            stack.push(data);
            this.arrayIndex++;
            this.array[this.arrayIndex] = stack;
            return;
        }
        this.array[this.arrayIndex].push(data)
    }
    pop(): any {
        if (!this.array[this.arrayIndex] && this.arrayIndex == 0) {
            throw new Error("EmptyStackException");
        }
        let data = this.array[this.arrayIndex].pop();
        if (this.array[this.arrayIndex].isEmpty() && this.arrayIndex != 0) {
            this.arrayIndex--;
        }
        return data;
    }
    peak() {
        if (!this.array[this.arrayIndex]) {
            throw new Error("EmptyStackException");
        }
        return this.array[this.arrayIndex].peak();
    }
    isEmpty() {
        return this.array[this.arrayIndex].isEmpty()
    }
}