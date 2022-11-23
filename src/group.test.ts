import { Group } from "./group"

describe('Group class', () => {
    let groupClass = new Group();
    test('Should create a group', () => {
        let group = groupClass.from([1, 2 ,3, 4, 3, 2 , 1])
        expect(group.group).toStrictEqual([1, 2, 3, 4]);
    })
    test('Should add an item to the group property', () => {
        let group = new Group();
        group.add(1);
        expect(group.group).toStrictEqual([1]);
    })
    test('Shouldnt add an item to the group property', () => {
        let group = groupClass.from([1, 2, 3, 4, 5])
        group.add(1);
        expect(group.group).toStrictEqual([1, 2, 3, 4, 5]);
    })
    test('Should remove an item from the group property', () => {
        let group = groupClass.from([1, 2, 3]);
        group.remove(2);
        expect(group.group).toStrictEqual([1, 3]);
    })
    test('should return true for has(5)', () => {
        let group = groupClass.from([1, 2, 3, 4, 5]);
        expect(group.has(5)).toBe(true);
    })
    test('should return false for has(5)', () => {
        let group = groupClass.from([1, 2, 3, 4]);
        expect(group.has(5)).toBe(false);
    })
})