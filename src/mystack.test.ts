import { MyStack } from "./mystack"

describe('MyStack tests', () => {
    test('stack should return true for empty()', () => {
        const stack = new MyStack();
        stack.push(1);
        stack.push(2);
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    })
    test('stack should return false for empty()', () => {
        const stack = new MyStack();
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    })
    test('stack should return a valid value for peek()', () => {
        const stack = new MyStack();
        stack.push(1);
        expect(stack.peak()).toBe(1);
    })
    test('stack should return a exception value for peek()', () => {
        const stack = new MyStack();
        expect(function() { stack.peak() }).toThrow("EmptyStackException");
    })
    test('stack should return a exception value for pop()', () => {
        const stack = new MyStack();
        expect(function() { stack.pop() }).toThrow("EmptyStackException");
    })
    test('stack should return a valid value for pop()', () => {
        const stack = new MyStack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        stack.push(4);
        expect(stack.peak()).toBe(4);
    })
    test('stack should return a valid value for getMin()', () => {
        const stack = new MyStack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        stack.push(4);
        expect(stack.getMin()).toBe(1);
    })
    test('stack should return a valid value for getMin()', () => {
        const stack = new MyStack();
        stack.push(3);
        stack.push(4);
        stack.push(1);
        stack.pop();
        expect(stack.getMin()).toBe(3);
    })
    test('stack should return a valid value for length()', () => {
        const stack = new MyStack();
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.push(2);
        stack.push(1);
        stack.pop();
        expect(stack.length()).toBe(4);
    })
    test('stack should return a valid value for length()', () => {
        const stack = new MyStack();
        expect(stack.length()).toBe(0);
    })
})
