import { EloquentJavascriptExercises } from './eloquentjavascript'
import { Node } from './LinkedList';

describe('Chapter1', () => {
    let exercises = new EloquentJavascriptExercises();
    test('should return a valid string for loopingATriangle()', () => {
        let response = "#\n##\n###\n####\n#####\n######\n#######\n";
        expect(exercises.loopingATriangle()).toBe(response)
    })
    test('should return a valid string for fizzBuzz()', () => {
        let response = "Fizz\nBuzz\nFizz\nFizz\nBuzz\nFizz\nFizzBuzz\nFizz\n"
        + "Buzz\nFizz\nFizz\nBuzz\nFizz\nFizzBuzz\nFizz\nBuzz\nFizz\nFizz\n"
        + "Buzz\nFizz\nFizzBuzz\nFizz\nBuzz\nFizz\nFizz\nBuzz\nFizz\n"
        + "FizzBuzz\nFizz\nBuzz\nFizz\nFizz\nBuzz\nFizz\nFizzBuzz\nFizz\n"
        + "Buzz\nFizz\nFizz\nBuzz\nFizz\nFizzBuzz\nFizz\nBuzz\nFizz\nFizz\nBuzz\n";
        expect(exercises.fizzBuzz()).toBe(response)
    })
    test('should return a valid string for createGrid(5, 5)', () => {
        let response = " # # \n# # #\n # # \n# # #\n # # \n";
        expect(exercises.createGrid(5, 5)).toBe(response)
    })
    test('should return a valid string for createGrid(3, 8)', () => {
        let response = " # \n# #\n # \n# #\n # \n# #\n # \n# #\n";
        expect(exercises.createGrid(3, 8)).toBe(response)
    })
    test('should return true for isEven(16)', () => {
        expect(exercises.isEven(16)).toBe(true)
    })
    test('should return false for isEven(15)', () => {
        expect(exercises.isEven(15)).toBe(false)
    })
    test('should return false for isEven(-5)', () => {
        expect(exercises.isEven(-5)).toBe(false)
    })
    test('should return 2 for countBs("ABCDEFGCHbB")', () => {
        expect(exercises.countBs("ABCDEFGCHbB")).toBe(2)
    })
    test('should return 0 for countBs("ACDFGHIJ")', () => {
        expect(exercises.countBs("ACDFGHIJ")).toBe(0)
    })
    test('should return expectedResponse for range(1, 10, 2)', () => {
        let expectedResponse = [1, 3, 5, 7, 9];
        expect(exercises.range(1, 10, 2)).toStrictEqual(expectedResponse)
    })
    test('should return expectedResponse for range(5, 2, -1)', () => {
        let expectedResponse = [5, 4, 3, 2];
        expect(exercises.range(5, 2, -1)).toStrictEqual(expectedResponse)
    })
    test('should return 55 for sum(range(1, 10))', () => {
        expect(exercises.sum(exercises.range(1, 10))).toBe(55)
    })
    test('should return [5, 4, 3, 2, 1] for reverseArray([1, 2, 3, 4, 5])', () => {
        let expectedResponse = [5, 4, 3, 2, 1];
        expect(exercises.reverseArray([1, 2, 3, 4, 5])).toStrictEqual(expectedResponse)
    })
    test('should return [5, 4, 3, 2, 1] for reverseArrayInPlace([1, 2, 3, 4, 5])', () => {
        let expectedResponse = [5, 4, 3, 2, 1];
        expect(exercises.reverseArrayInPlace([1, 2, 3, 4, 5])).toStrictEqual(expectedResponse);
    })
    test('should return a valid linked list for arrayToList([1, 2, 3, 4, 5])', () => {
        let expectedLinkedList = new Node(1);
        expectedLinkedList.appendToTail(2);
        expectedLinkedList.appendToTail(3);
        expectedLinkedList.appendToTail(4);
        expectedLinkedList.appendToTail(5);

        expect(exercises.arrayToList([1, 2, 3, 4, 5])).toStrictEqual(expectedLinkedList);
    })
    test('should return a valid linked list for arrayToList([1])', () => {
        let expectedLinkedList = new Node(1);

        expect(exercises.arrayToList([1])).toStrictEqual(expectedLinkedList);
    })
    test('should return a valid array list for listToArray(linkedList)', () => {
        let linkedList = new Node(1);
        linkedList.appendToTail(2);
        linkedList.appendToTail(3);
        linkedList.appendToTail(4);
        linkedList.appendToTail(5);
        let expectedArray = [1, 2, 3 ,4, 5];

        expect(exercises.listToArray(linkedList)).toStrictEqual(expectedArray);
    })
    test('should return false for deepEqual(linkedList1, linkedList2)', () => {
        let linkedList = exercises.arrayToList([1, 2, 3, 4, 5]);
        let linkedList2 = exercises.arrayToList([1, 2, 4, 5, 3]);

        expect(exercises.deepEqual(linkedList, linkedList2)).toStrictEqual(false);
    })
    test('should return true for deepEqual(linkedList1, linkedList2)', () => {
        let linkedList = exercises.arrayToList([1, 2, 3, 4, 5]);
        let linkedList2 = exercises.arrayToList([1, 2, 3, 4, 5]);

        expect(exercises.deepEqual(linkedList, linkedList2)).toStrictEqual(true);
    })
    test('should return true for deepEqual(null, null)', () => {
        expect(exercises.deepEqual(null, null)).toStrictEqual(true);
    })
    test('should return false for deepEqual(linkedList1, null)', () => {
        let linkedList = exercises.arrayToList([1, 2, 3, 4, 5]);

        expect(exercises.deepEqual(linkedList, null)).toStrictEqual(false);
    })
    test('should return false for deepEqual(linkedList1, linkedList2)', () => {
        let object1 = {
            prop1: 'prop1',
            prop2: 'prop2',
        }
        let object2 = {
            prop1: 'prop1',
        }

        expect(exercises.deepEqual(object1, object2)).toStrictEqual(false);
    })
    test('should return a valid array for flattening([[1, 2, 3], [4, 5, 6], [7, 8, 9]])', () => {
        let expectedArray = [1, 2, 3, 4, 5, 6, 7, 8 , 9];
        expect(exercises.flattening([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual(expectedArray);
    })
    test('should return a valid array for loop(value, testFunction, updatedFunction, bodyFunction)', () => {
        let expectedArray = [3, 2, 1];
        expect(exercises.loop(3, n => n > 0, n => n - 1, (value, array) => array.push(value))).toStrictEqual(expectedArray);
    })
    test('should return true for every([1, 3, 5], testFunction)', () => {
        expect(exercises.every([1, 3, 5], n => n < 10)).toBe(true);
    })
    test('should return false for every([1, 3, 5, 16], testFunction)', () => {
        expect(exercises.every([1, 3, 5, 16], n => n < 10)).toBe(false);
    })
    test('should return true for every([1, 3, 5, 16], testFunction)', () => {
        expect(exercises.every([], n => n < 10)).toBe(true);
    })
    test('should return true for everyWithSome([1, 3, 5], testFunction)', () => {
        expect(exercises.everyWithSome([1, 3, 5], n => n < 10)).toBe(true);
    })
    test('should return false for everyWithSome([1, 3, 5, 16], testFunction)', () => {
        expect(exercises.everyWithSome([1, 3, 5, 16], n => n < 10)).toBe(false);
    })
    test('should return true for everyWithSome([1, 3, 5, 16], testFunction)', () => {
        expect(exercises.everyWithSome([], n => n < 10)).toBe(true);
    })
});
