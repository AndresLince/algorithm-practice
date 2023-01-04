import { SetOfStacks } from "./setOfStacks";

describe('SetOfStack', () => {
    test('SetOfStack should return true for empty()', () => {
        const stack = new SetOfStacks(5);
        stack.push(1);
        stack.push(2);
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    })
    test('SetOfStack should return false for empty()', () => {
        const stack = new SetOfStacks(5);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    })
    test('SetOfStack should return a valid value for peek()', () => {
        const stack = new SetOfStacks(5);
        stack.push(1);
        expect(stack.peak()).toBe(1);
    })
    test('SetOfStack should return a exception value for peek()', () => {
        const stack = new SetOfStacks(5);
        expect(function () { stack.peak() }).toThrow("EmptyStackException");
    })
    test('SetOfStack should return a exception value for pop()', () => {
        const stack = new SetOfStacks(5);
        expect(function () { stack.pop() }).toThrow("EmptyStackException");
    })
    test('SetOfStack should return a valid value for pop()', () => {
        const stack = new SetOfStacks(5);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.push(6);
        stack.push(7);
        stack.pop();
        stack.pop();
        stack.pop();
        stack.push(8);
        expect(stack.peak()).toBe(8);
    })
})
