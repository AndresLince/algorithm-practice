import { ThreeInOneStack } from "./threeinonestack";

describe('threeinonestack tests', () => {
    test('threeinonestack should return true for empty(1)', () => {
        const stack = new ThreeInOneStack(14);
        stack.push(1, 1);
        stack.push(2, 1);
        stack.pop(1);
        stack.pop(1);
        expect(stack.isEmpty(1)).toBe(true);
    });
    test('threeinonestack should return true for empty(2)', () => {
        const stack = new ThreeInOneStack(14);
        stack.push(1, 2);
        stack.push(2, 2);
        stack.pop(2);
        stack.pop(2);
        expect(stack.isEmpty(2)).toBe(true);
    });
    test('threeinonestack should return true for empty(3)', () => {
        const stack = new ThreeInOneStack(14);
        stack.push(1, 3);
        stack.push(2, 3);
        stack.pop(3);
        stack.pop(3);
        expect(stack.isEmpty(3)).toBe(true);
    });
    test('threeinonestack should return false for empty(1)', () => {
        const stack = new ThreeInOneStack(14);
        stack.push(1, 1);
        expect(stack.isEmpty(1)).toBe(false);
    })
    test('threeinonestack should return false for empty(2)', () => {
        const stack = new ThreeInOneStack(24);
        stack.push(1, 2);
        expect(stack.isEmpty(2)).toBe(false);
    })
    test('threeinonestack should return false for empty(3)', () => {
        const stack = new ThreeInOneStack(14);
        stack.push(1, 3);
        expect(stack.isEmpty(3)).toBe(false);
    })
    test('threeinonestack should return a valid value for peek(1)', () => {
        const stack = new ThreeInOneStack(14);
        stack.push(1, 1);
        expect(stack.peak(1)).toBe(1);
    })
    test('threeinonestack should return a valid value for peek(2)', () => {
        const stack = new ThreeInOneStack(14);
        stack.push(1, 2);
        expect(stack.peak(2)).toBe(1);
    })
    test('threeinonestack should return a valid value for peek(3)', () => {
        const stack = new ThreeInOneStack(14);
        stack.push(1, 3);
        expect(stack.peak(3)).toBe(1);
    })
    test('threeinonestack should return a exception value for peek(1)', () => {
        const stack = new ThreeInOneStack(6);
        expect(function () { stack.peak(1) }).toThrow("EmptyStackException");
    })
    test('threeinonestack should return a exception value for peek(2)', () => {
        const stack = new ThreeInOneStack(6);
        expect(function () { stack.peak(2) }).toThrow("EmptyStackException");
    })
    test('threeinonestack should return a exception value for peek(3)', () => {
        const stack = new ThreeInOneStack(3);
        expect(function () { stack.peak(1) }).toThrow("EmptyStackException");
    })
    test('threeinonestack should return a exception value for pop(1)', () => {
        const stack = new ThreeInOneStack(5);
        expect(function () { stack.pop(1) }).toThrow("EmptyStackException");
    })
    test('threeinonestack should return a exception value for pop(2)', () => {
        const stack = new ThreeInOneStack(5);
        expect(function () { stack.pop(2) }).toThrow("EmptyStackException");
    })
    test('threeinonestack should return a exception value for pop(3)', () => {
        const stack = new ThreeInOneStack(5);
        expect(function () { stack.pop(3) }).toThrow("EmptyStackException");
    })
    test('threeinonestack should return a valid value for pop(1)', () => {
        const stack = new ThreeInOneStack(12);
        stack.push(1, 1);
        stack.push(2, 1);
        stack.push(3, 1);
        stack.pop(1);
        stack.push(4, 1);
        expect(stack.pop(1)).toBe(4);
    })
    test('threeinonestack should return a valid value for pop(2)', () => {
        const stack = new ThreeInOneStack(12);
        stack.push(1, 2);
        stack.push(2, 2);
        stack.push(3, 2);
        stack.pop(2);
        stack.push(4, 2);
        expect(stack.pop(2)).toBe(4);
    })
    test('threeinonestack should return a valid value for pop(3)', () => {
        const stack = new ThreeInOneStack(12);
        stack.push(1, 3);
        stack.push(2, 3);
        stack.push(3, 3);
        stack.pop(3);
        stack.push(4, 3);
        expect(stack.pop(3)).toBe(4);
    })
    test('threeinonestack should return a exception value for push(3, 1)', () => {
        const stack = new ThreeInOneStack(6);
        stack.push(1, 1);
        stack.push(2, 1);
        expect(function () { stack.push(2, 1); }).toThrow("FullStackException");
    })
    test('threeinonestack should return a exception value for push(3, 2)', () => {
        const stack = new ThreeInOneStack(6);
        stack.push(1, 2);
        stack.push(2, 2);
        expect(function () { stack.push(2, 2); }).toThrow("FullStackException");
    })
    test('threeinonestack should return a exception value for push(3, 3)', () => {
        const stack = new ThreeInOneStack(6);
        stack.push(1, 3);
        stack.push(2, 3);
        expect(function () { stack.push(2, 3); }).toThrow("FullStackException");
    })
    test('threeinonestack should return a exception value for push(2, 4)', () => {
        const stack = new ThreeInOneStack(6);
        expect(function () { stack.push(2, 4); }).toThrow("WrongStackException");
    })
})