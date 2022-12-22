import { EloquentJavascriptExercises } from "./eloquentjavascript";
import { Node } from "./LinkedList";

describe('Linked list', () => {
    test('should return a valid linkedList for prepend(linkedList, 2)', () => {
        let expectedLinkedList = new Node(1);
        expectedLinkedList.appendToTail(2);

        let linkedList = new Node(2);
        linkedList.prepend(1);
        expect(linkedList).toStrictEqual(expectedLinkedList);
    })
    test('should return a valid linkedList for nth(linkedList, 2)', () => {
        let expectedLinkedList = new Node(3);
        expectedLinkedList.appendToTail(4);
        expectedLinkedList.appendToTail(5);

        let linkedList = new Node(1);
        linkedList.appendToTail(2);
        linkedList.appendToTail(3);
        linkedList.appendToTail(4);
        linkedList.appendToTail(5);

        expect(linkedList.nth(linkedList, 2)).toStrictEqual(expectedLinkedList);
    })
    test('should return a valid linkedList for nth(linkedList, 7)', () => {
        let linkedList = new Node(1);
        linkedList.appendToTail(2);
        linkedList.appendToTail(3);
        linkedList.appendToTail(4);
        linkedList.appendToTail(5);

        expect(linkedList.nth(linkedList, 7)).toStrictEqual(null);
    })
    test('should return null linkedList for nth(null, 2)', () => {
        let linkedList = new Node(1);
        expect(linkedList.nth(null, 2)).toStrictEqual(null);
    })
    test('should return a valid linkedList for deleteNode(linkedList, 3)', () => {
        let expectedLinkedList = new Node(1);
        expectedLinkedList.appendToTail(2);
        expectedLinkedList.appendToTail(4);
        expectedLinkedList.appendToTail(5);

        let linkedList = new Node(1);
        linkedList.appendToTail(2);
        linkedList.appendToTail(3);
        linkedList.appendToTail(4);
        linkedList.appendToTail(5);

        expect(linkedList.deleteNode(linkedList, 3)).toStrictEqual(expectedLinkedList);
    })
    test('should return a valid linkedList for deleteNode(linkedList, 10)', () => {
        let linkedList = new Node(1);
        linkedList.appendToTail(2);
        linkedList.appendToTail(3);
        linkedList.appendToTail(4);
        linkedList.appendToTail(5);

        expect(linkedList.deleteNode(linkedList, 10)).toStrictEqual(linkedList);
    })
    test('should return a valid linkedList for deleteNode(linkedList, 1)', () => {
        let expectedLinkedList = new Node(2);
        expectedLinkedList.appendToTail(3);
        expectedLinkedList.appendToTail(4);
        expectedLinkedList.appendToTail(5);

        let linkedList = new Node(1);
        linkedList.appendToTail(2);
        linkedList.appendToTail(3);
        linkedList.appendToTail(4);
        linkedList.appendToTail(5);

        expect(linkedList.deleteNode(linkedList, 1)).toStrictEqual(expectedLinkedList);
    })
    test('should return null for deleteNode(null, 1)', () => {
        let linkedList = new Node(1);
        expect(linkedList.deleteNode(null, 1)).toStrictEqual(null);
    })
    test('should return 1 for len()', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList([]);
        expect(linkedList.len()).toBe(1)
    })
    test('should return 1 for len()', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList([9]);
        expect(linkedList.len()).toBe(1)
    })
    test('should return 4 for len()', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList([1, 2, 3 ,4]);
        expect(linkedList.len()).toBe(4)
    })
    test('should return a valid linked list for revert()', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList([1, 2, 3, 4]);
        let expectedLinkedList = EloquentJavascriptExercises.arrayToList([4, 3, 2 ,1]);
        linkedList.revert()
        expect(linkedList).toStrictEqual(expectedLinkedList);
    })
    test('should return a valid linked list for revert()', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList([1]);
        let expectedLinkedList = EloquentJavascriptExercises.arrayToList([1]);
        linkedList.revert()
        expect(linkedList).toStrictEqual(expectedLinkedList);
    })
    it('should call console.log len() + 1 times for print(linkedList)', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList([1, 2, 3, 4]);
        const logSpy = jest.spyOn(console, 'log');
        linkedList.print();
        expect(logSpy).toHaveBeenCalledTimes(linkedList.len() + 1);
    });
    it('should return a valid linked list for getMin(linkedList)', () => {
        let linkedList = EloquentJavascriptExercises.arrayToList([2, 3, 4, 1, 5, 6]);
        expect(linkedList.getMin().data).toBe(1);
    });
});
