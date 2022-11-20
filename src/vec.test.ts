import { Vec } from "./vec";

describe('Vec class', () => {
    test('should return valid vector for plus()', () => {
        let vec1 = new Vec(1, 2);
        let vec2 = new Vec(2, 3);
        expect(vec1.plus(vec2)).toStrictEqual(new Vec(3, 5));
    })
    test('should return valid vector for minus()', () => {
        let vec1 = new Vec(1, 2);
        let vec2 = new Vec(2, 3);
        expect(vec1.minus(vec2)).toStrictEqual(new Vec(-1, -1));
    })
    test('should return valid value for length()', () => {
        let vec1 = new Vec(3, 4);
        expect(vec1.length()).toBe(5);
    })
});