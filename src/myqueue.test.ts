import { MyQueue } from "./myqueue"

describe('MyQueue tests', () => {
    test('myqueue should return a valid value for peek()', () => {
        const myqueue = new MyQueue();
        myqueue.add(1);
        myqueue.add(2);
        myqueue.add(3);
        expect(myqueue.peek()).toBe(1);
        myqueue.remove();
        expect(myqueue.peek()).toBe(2);
        myqueue.remove();
        expect(myqueue.peek()).toBe(3);
    })
    test('stack should return a exception value for peek()', () => {
        const myqueue = new MyQueue();
        expect(function () { myqueue.peek() }).toThrow("NoSuchElementException");
    })
    test('stack should return a exception value for remove()', () => {
        const myqueue = new MyQueue();
        myqueue.add(1);
        myqueue.remove();
        expect(function () { myqueue.remove() }).toThrow("NoSuchElementException");
    })
    test('stack should return true value for isEmpty()', () => {
        const myqueue = new MyQueue();
        expect(myqueue.isEmpty()).toBe(true);
    })
    test('stack should return false value for isEmpty()', () => {
        const myqueue = new MyQueue();
        myqueue.add(1);
        expect(myqueue.isEmpty()).toBe(false);
    })
})