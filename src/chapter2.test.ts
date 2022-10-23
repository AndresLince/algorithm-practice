import { Chapter2 } from "./chapter2";
import { Node } from "./LinkedList";

describe('Chapter2', () => {
    let chapter1 = new Chapter2();
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
        expect(chapter1.removeDups(node)).toStrictEqual(expectedResult);
    })
});
