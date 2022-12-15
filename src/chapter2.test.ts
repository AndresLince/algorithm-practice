import { Chapter2 } from "./chapter2";
import { Node } from "./LinkedList";
import { EloquentJavascriptExercises } from './eloquentjavascript';
import { AppendToTailAdder } from './linkedListAdder';

describe('Chapter2', () => {
    let chapter2 = new Chapter2();
    var appendToTailAdder = new AppendToTailAdder();
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
        let linkedList = EloquentJavascriptExercises.arrayToList([1, 2, 3, 4, 5, 6, 7]);
        let expectedResult = EloquentJavascriptExercises.arrayToList([5, 6, 7]);
        expect(chapter2.kthToLast(linkedList, 2)).toStrictEqual(expectedResult)
    })
    test('should return the 5 to last node from a linked list kthToLast(head, 5)', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList([1, 2, 3]);
        expect(chapter2.kthToLast(linkedList, 5)).toBe(null)
    })
    test('should return a valid linked list deleteMiddleNode(head)', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList([1, 2, 3]);
        let expectedResult = EloquentJavascriptExercises.arrayToList([1, 3]);
        expect(chapter2.deleteMiddleNode(linkedList)).toStrictEqual(expectedResult)
    })
    test('should return a valid linked list deleteMiddleNode(head)', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList([1, 2, 3, 4]);
        let expectedResult = EloquentJavascriptExercises.arrayToList([1, 3, 4]);
        expect(chapter2.deleteMiddleNode(linkedList)).toStrictEqual(expectedResult)
    })
    test('should return a valid linked list partition(head, 5)', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList([3, 5, 8, 5, 10, 2, 1]);
        let expectedResult = EloquentJavascriptExercises.arrayToList([1, 2, 3, 5, 8, 5, 10]);
        expect(chapter2.partition(linkedList, 5)).toStrictEqual(expectedResult);
    })
    test('should return null partition(null, 5)', () => {
        expect(chapter2.partition(null, 5)).toBe(null);
    })
    test('should return a valid linked list sumLists(linkedList1, linkedList2)', () => {
        const linkedList1 = EloquentJavascriptExercises.arrayToList([7, 1, 6]);
        const linkedList2 = EloquentJavascriptExercises.arrayToList([5, 9, 2]);
        const expectedResult = EloquentJavascriptExercises.arrayToList([2, 1, 9]);
        expect(chapter2.sumLists(linkedList1, linkedList2, appendToTailAdder)).toStrictEqual(expectedResult);
    })
    test('should return a valid linked list sumLists(linkedList1, linkedList2)', () => {
        const linkedList1 = EloquentJavascriptExercises.arrayToList([4, 3, 4]);
        const linkedList2 = EloquentJavascriptExercises.arrayToList([1, 4]);
        const expectedResult = EloquentJavascriptExercises.arrayToList([5, 7, 4]);
        expect(chapter2.sumLists(linkedList1, linkedList2, appendToTailAdder)).toStrictEqual(expectedResult);
    })
    test('should return a valid linked list sumLists(linkedList1, linkedList2)', () => {
        const linkedList1 = EloquentJavascriptExercises.arrayToList([2, 3]);
        const linkedList2 = EloquentJavascriptExercises.arrayToList([1, 4, 8]);
        const expectedResult = EloquentJavascriptExercises.arrayToList([3, 7, 8]);
        expect(chapter2.sumLists(linkedList1, linkedList2, appendToTailAdder)).toStrictEqual(expectedResult);
    })
    test('should return a valid linked list sumLists(linkedList1, linkedList2)', () => {
        const linkedList1 = EloquentJavascriptExercises.arrayToList([9, 9, 9]);
        const linkedList2 = EloquentJavascriptExercises.arrayToList([9, 9, 9]);
        const expectedResult = EloquentJavascriptExercises.arrayToList([8, 9, 9, 1]);
        expect(chapter2.sumLists(linkedList1, linkedList2, appendToTailAdder)).toStrictEqual(expectedResult);
    })
    test('should return a valid linked list sumListsForwardOrder(linkedList1, linkedList2)', () => {
        const linkedList1 = EloquentJavascriptExercises.arrayToList([1, 3, 4]);
        const linkedList2 = EloquentJavascriptExercises.arrayToList([1, 4]);
        const expectedResult = EloquentJavascriptExercises.arrayToList([1, 4, 8]);
        expect(chapter2.sumListsForwardOrder(linkedList1, linkedList2)).toStrictEqual(expectedResult);
    })
    test('should return true for isPalindrome(linkedList)', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList(["D", "a", "b", "a", "l", "e", "a", "r", "r", "o", "z", "a", "l", "a", "z", "o", "r", "r", "a", "e", "l", "a", "b", "a", "d"]);
        expect(chapter2.isPalindrome(linkedList)).toBe(true);
    })
    test('should return false for isPalindrome(linkedList)', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList(["P", "e", "r", "r", "o"]);
        expect(chapter2.isPalindrome(linkedList)).toBe(false);
    })
    test('should return false for isPalindrome(null)', () => {
        expect(chapter2.isPalindrome(null)).toBe(false);
    })
    test('should return a valid linkedList for isIntersection(linkedList, linkedList2)', () => {
        let intersectedNode = EloquentJavascriptExercises.arrayToList(["d", "a", "s"]);
        let linkedList = EloquentJavascriptExercises.arrayToList(["d", "a", "z"]);
        linkedList.next.next = intersectedNode;
        let linkedList2 = EloquentJavascriptExercises.arrayToList(["p", "e", "r", "r", "o"]);
        linkedList2.next.next.next.next = intersectedNode;
        let intersection = chapter2.isIntersection(linkedList, linkedList2);
        expect(intersection).toStrictEqual(intersectedNode);
    })
    test('should return a null for isIntersection(linkedList, linkedList2)', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList(["a", "b", "c"]);
        let linkedList2 = EloquentJavascriptExercises.arrayToList(["z", "b", "c"]);
        let intersection = chapter2.isIntersection(linkedList, linkedList2);
        expect(intersection).toBe(null);
    })
    test('should return a valid linkedList for loopDetection(linkedList)', () => {
        let linkedList = new Node("a");
        linkedList.appendToTail("b");
        linkedList.appendToTail("c");
        linkedList.appendToTail("d");
        linkedList.next.next.next.next = linkedList;

        let result = chapter2.loopDetection(linkedList);
        expect(result.next).toStrictEqual(linkedList);
    })
    test('should return a null for loopDetection(linkedList)', () => {
        const linkedList = EloquentJavascriptExercises.arrayToList(["a", "b", "c", "d"]);
        let result = chapter2.loopDetection(linkedList);
        expect(result).toBe(null);
    })
});
