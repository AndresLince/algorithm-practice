import { Chapter1 } from './chapter1'

describe('Chapter1', () => {
    let chapter1 = new Chapter1();
    test('should return true for hasAllUniqueCharacters("algo")', () => {
        expect(chapter1.hasAllUniqueCharacters('algo')).toBe(true)
    })
    test('should return false for hasAllUniqueCharacters("algoa")', () => {
        expect(chapter1.hasAllUniqueCharacters('algoa')).toBe(false)
    })
    test('should return true for checkPermutation("algo","loga")', () => {
        expect(chapter1.checkPermutation('algo','loga')).toBe(true)
    })
    test('should return false for checkPermutation("algoa","algo")', () => {
        expect(chapter1.checkPermutation('algoa', 'algo')).toBe(false)
    })
    test('should return false for checkPermutation("aabbcc","aaabcc")', () => {
        expect(chapter1.checkPermutation('aabbcc', 'aaabcc')).toBe(false)
    })
})
