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
})