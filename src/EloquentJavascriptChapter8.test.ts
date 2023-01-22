import { EJC8 } from "./EloquentJavascriptChapter8"

describe('EloquentJavascriptChapter8', () => {
    test('should return a valid value for reliableMultiply ', () => {
        const ejc8 = new EJC8()
        const result = ejc8.reliableMultiply(8,8);
        expect(result).toBe(64);
    })
})