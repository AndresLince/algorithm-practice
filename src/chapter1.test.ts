import { Chapter1 } from './chapter1'

describe('Chapter1', () => {
    test('should return true for hasAllUniqueCharacters("algo")', () => {
        expect(new Chapter1().hasAllUniqueCharacters('algo')).toBe(true)
    })
    test('should return false for hasAllUniqueCharacters("algoa")', () => {
        expect(new Chapter1().hasAllUniqueCharacters('algoa')).toBe(false)
    })
})
