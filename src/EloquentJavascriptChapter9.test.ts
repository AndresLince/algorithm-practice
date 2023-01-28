import { EJC9 } from "./EloquentJavascriptChapter9"

describe('EloquentJavascriptChapter9', () => {
    const ejc9 = new EJC9();
    test('should return true for codeGolf(1)', () => {
        const validation = ejc9.codeGolf(1);
        expect(validation).toBe(true);
    })
    test('should return false for codeGolf(8)', () => {
        const validation = ejc9.codeGolf(8);
        expect(validation).toBe(false);
    })
    test('should return false for codeGolf(9)', () => {
        const validation = ejc9.codeGolf(9);
        expect(validation).toBe(false);
    })
    test('should return false for codeGolf(10)', () => {
        const validation = ejc9.codeGolf(10);
        expect(validation).toBe(false);
    })
    test('should return true for codeGolf(2)', () => {
        const validation = ejc9.codeGolf(2);
        expect(validation).toBe(true);
    })
    test('should return true for codeGolf(3)', () => {
        const validation = ejc9.codeGolf(3);
        expect(validation).toBe(true);
    })
    test('should return true for codeGolf(4)', () => {
        const validation = ejc9.codeGolf(4);
        expect(validation).toBe(true);
    })
    test('should return true for codeGolf(5)', () => {
        const validation = ejc9.codeGolf(5);
        expect(validation).toBe(true);
    })
    test('should return true for codeGolf(6)', () => {
        const validation = ejc9.codeGolf(6);
        expect(validation).toBe(true);
    })
    test('should return true for codeGolf(7)', () => {
        const validation = ejc9.codeGolf(7);
        expect(validation).toBe(true);
    })
    test('should return a valid string for quotingStyle(text)', () => {
        const text = "'I'm the cook,' he said, 'it's my job.'";
        const result = ejc9.quotingStyle(text);
        const expectedText = "\"I'm the cook,\" he said, \"it's my job.\""
        expect(result).toBe(expectedText);
    })
    test('should return true for numbersAgain()', () => {
        const result = ejc9.numbersAgain();
        expect(result).toBe(true);
    })
})
