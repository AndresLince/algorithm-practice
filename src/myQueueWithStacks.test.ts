import { MyQueueWithStacks } from "./myQueueWithStacks";

describe('MyQueueWithStacks', () => {
    test('MyQueueWithStacks should return true for isEmpty()', () => {
        const queue = new MyQueueWithStacks();
        queue.add(1);
        queue.add(2);
        queue.remove();
        queue.remove();
        expect(queue.isEmpty()).toBe(true);
    })
    test('MyQueueWithStacks should return false for isEmpty()', () => {
        const queue = new MyQueueWithStacks();
        queue.add(1);
        expect(queue.isEmpty()).toBe(false);
    })
    test('MyQueueWithStacks should return a valid value for peek()', () => {
        const queue = new MyQueueWithStacks();
        queue.add(1);
        expect(queue.peek()).toBe(1);
    })
    test('MyQueueWithStacks should return a exception value for peek()', () => {
        const queue = new MyQueueWithStacks();
        expect(function () { queue.peek() }).toThrow("NoSuchElementException");
    })
    test('MyQueueWithStacks should return a exception value for pop()', () => {
        const queue = new MyQueueWithStacks();
        expect(function () { queue.remove() }).toThrow("NoSuchElementException");
    })
    test('MyQueueWithStacks should return a valid value for pop()', () => {
        const queue = new MyQueueWithStacks();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        queue.add(4);
        queue.add(5);
        queue.add(6);
        queue.add(7);
        queue.remove();
        queue.remove();
        queue.remove();
        queue.add(8);
        expect(queue.peek()).toBe(8);
    })
})