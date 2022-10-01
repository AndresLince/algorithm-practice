import { Practice } from "./practice";

describe('asdasd',() => {
    let practice = new Practice();
    test('should return true for validateOpenAndClose("{[()]}")', () => {
        const response = practice.validateOpenAndClose('{[()]}', 0, 1, false);
        expect(response.valid).toBe(true);
    })
    test('should return true for validateOpenAndClose("{[()()][{}]}")', () => {
        const response = practice.validateOpenAndClose('{[()()][{}]}', 0, 1, false);
        expect(response.valid).toBe(true);
    })
    test('should return true for validateOpenAndClose("([]{})")', () => {
        const response = practice.validateOpenAndClose('([]{})', 0, 1, false);
        expect(response.valid).toBe(true);
    })
    test('should return false for validateOpenAndClose("]")', () => {
        const response = practice.validateOpenAndClose(']', 0, 1, false);
        expect(response.valid).toBe(false);
    })
    test('should return false for validateOpenAndClose("[{]")', () => {
        const response = practice.validateOpenAndClose('[{]', 0, 1, false);
        expect(response.valid).toBe(false);
    })
    test('should return false for validateOpenAndClose("//(")', () => {
        const response = practice.validateOpenAndClose('//(', 0, 1, false);
        expect(response.valid).toBe(false);
    })
    test('should return false for validateOpenAndClose("[}]")', () => {
        const response = practice.validateOpenAndClose('[}]', 0, 1, false);
        expect(response.valid).toBe(false);
    })
    test('should return true for validateOpenAndClose("[]', () => {
        const response = practice.validateOpenAndClose('[]', 0, 1, false);
        expect(response.valid).toBe(true);
    })
    test('should return true for validateOpenAndClose("[]()', () => {
        const response = practice.validateOpenAndClose('[]()', 0, 1, false);
        expect(response.valid).toBe(true);
    })
})