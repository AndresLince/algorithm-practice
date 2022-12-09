import { PGroup } from "./pgroup"

describe('PGgroup tests', () => {
    test('Should not modify the original PGroup for add()', () => {
        let a = PGroup.empty.add("a");
        let expectedResult = PGroup.empty.add("a");
        a.add("b");
        expect(a).toStrictEqual(expectedResult);
    })
    test('Should not modify the original PGroup for remove()', () => {
        let a = PGroup.empty.add("a");
        let expectedResult = PGroup.empty.add("a");
        a.delete("a");
        expect(a).toStrictEqual(expectedResult);
    })
    test('Should remove an item from the group property', () => {
        let a = PGroup.empty;
        a.group = [1, 2, 3];
        expect(a.delete(2).group).toStrictEqual([1, 3]);
    })
    test('Should remove an item from the group property', () => {
        let a = PGroup.empty;
        a.group = [1, 2, 3];
        expect(a.add(5).group).toStrictEqual([1, 2, 3, 5]);
    })
})