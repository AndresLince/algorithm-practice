import { Chapter2 } from "./chapter2";
import { Node } from "./LinkedList";
import { EloquentJavascriptExercises } from './eloquentjavascript';

describe('Chapter2', () => {
    let chapter2 = new Chapter2();
    let eloquentjavascriptExercises = new EloquentJavascriptExercises();
    test('should remove the duplicated nodes of a linked list removeDups(head)', () => {
        let expectedResult = new Node(1);
        expectedResult.appendToTail(2);
        expectedResult.appendToTail(5);
        expectedResult.appendToTail(7);
        expectedResult.appendToTail(9);

        let node = new Node(1);
        node.appendToTail(2);
        node.appendToTail(5);
        node.appendToTail(2);
        node.appendToTail(7);
        node.appendToTail(2);
        node.appendToTail(9);
        node.appendToTail(7);
        expect(chapter2.removeDups(node)).toStrictEqual(expectedResult);
    })
    test('should return the 2 to last node from a linked list kthToLast(head, 2)', () => {
        let linkedList = eloquentjavascriptExercises.arrayToList([1, 2, 3, 4, 5, 6, 7]);
        let expectedResult = eloquentjavascriptExercises.arrayToList([5, 6, 7]);
        expect(chapter2.kthToLast(linkedList, 2)).toStrictEqual(expectedResult)
    })
    test('should return the 5 to last node from a linked list kthToLast(head, 5)', () => {
        let linkedList = eloquentjavascriptExercises.arrayToList([1, 2, 3]);
        expect(chapter2.kthToLast(linkedList, 5)).toBe(null)
    })
    test('should return a valid linked list deleteMiddleNode(head)', () => {
        let linkedList = eloquentjavascriptExercises.arrayToList([1, 2, 3]);
        let expectedResult = eloquentjavascriptExercises.arrayToList([1, 3]);
        expect(chapter2.deleteMiddleNode(linkedList)).toStrictEqual(expectedResult)
    })
    test('should return a valid linked list deleteMiddleNode(head)', () => {
        let linkedList = eloquentjavascriptExercises.arrayToList([1, 2, 3, 4]);
        let expectedResult = eloquentjavascriptExercises.arrayToList([1, 3, 4]);
        expect(chapter2.deleteMiddleNode(linkedList)).toStrictEqual(expectedResult)
    })
    test('should return a valid linked list partition(head, 5)', () => {
        let linkedList = eloquentjavascriptExercises.arrayToList([3, 5, 8, 5, 10, 2, 1]);
        let expectedResult = eloquentjavascriptExercises.arrayToList([1, 2, 3, 5, 8, 5, 10]);
        expect(chapter2.partition(linkedList, 5)).toStrictEqual(expectedResult);
    })
});
