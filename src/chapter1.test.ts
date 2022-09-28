import { Chapter1 } from './chapter1'

describe('Chapter1', () => {
    test('should return true for hasAllUniqueCharacters("algo")', () => {
        expect(new Chapter1().hasAllUniqueCharacters('algo')).toBe(true)
    })
    test('should return false for hasAllUniqueCharacters("algoa")', () => {
        expect(new Chapter1().hasAllUniqueCharacters('algoa')).toBe(false)
    })
    test('should return true for checkPermutation("algo","loga")', () => {
        expect(new Chapter1().checkPermutation('algo','loga')).toBe(true)
    })
    test('should return false for checkPermutation("algoa","algo")', () => {
        expect(new Chapter1().checkPermutation('algoa', 'algo')).toBe(false)
    })
    test('should return false for checkPermutation("aabbcc","aaabcc")', () => {
        expect(new Chapter1().checkPermutation('aabbcc', 'aaabcc')).toBe(false)
    })
})
