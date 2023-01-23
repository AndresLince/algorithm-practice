import { EJC8 } from "./EloquentJavascriptChapter8"

describe('EloquentJavascriptChapter8', () => {
    const ejc8 = new EJC8();
    beforeEach(() => {
        ejc8.box.unlock();
        ejc8.box._content = [];
        ejc8.box.lock();
    });
    test('should return a valid value for reliableMultiply ', () => {
        const result = ejc8.reliableMultiply(8,8);
        expect(result).toBe(64);
    })
    test('should return a valid value for withBoxUnlocked() ', () => {
        ejc8.withBoxUnlocked((box) => {
            box.content.push("gold piece");
        });
        expect(function () { ejc8.box.content }).toThrow("Locked!");
        ejc8.box.unlock();
        expect(ejc8.box._content.length).toBe(1);
        expect(ejc8.box._content[0]).toBe("gold piece");
    })
    test('should return a valid value for withBoxUnlocked() ', () => {
        expect(function () {
            ejc8.withBoxUnlocked(() => {
                throw new Error("Pirates on the horizon! Abort!");
            })
        }).toThrow("Pirates on the horizon! Abort!");
    })
})
