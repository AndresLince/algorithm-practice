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
})
