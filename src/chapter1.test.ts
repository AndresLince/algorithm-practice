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
    test('should return true for urlify("Mr John Smith    ", 13)', () => {
        expect(chapter1.urlify('Mr John Smith    ', 13)).toBe('Mr%20John%20Smith')
    })
    test('should return true for isAPalindromePermutation("Tact Coa")', () => {
        expect(chapter1.isAPalindromePermutation('Tact Coa')).toBe(true)
    })
    test('should return true for isAPalindromePermutation("taco cat")', () => {
        expect(chapter1.isAPalindromePermutation('taco cat')).toBe(true)
    })
    test('should return true for isAPalindromePermutation("atco cta")', () => {
        expect(chapter1.isAPalindromePermutation('atco cta')).toBe(true)
    })
    test('should return true for isAPalindromePermutation("Dabale arroz a la zorra el abad")', () => {
        expect(chapter1.isAPalindromePermutation('Dabale arroz a la zorra el abad')).toBe(true)
    })
    test('should return false for isAPalindromePermutation("Dabale carne a la zorra el abad")', () => {
        expect(chapter1.isAPalindromePermutation('Dabale carne a la zorra el abad')).toBe(false)
    })
    test('should return true for oneEditAway("pale","ple"', () => {
        expect(chapter1.oneEditAway('pale','ple')).toBe(true)
    })
    test('should return true for oneEditAway("pales","pale")', () => {
        expect(chapter1.oneEditAway('pales','pale')).toBe(true)
    })
    test('should return true for oneEditAway("pale","bale")', () => {
        expect(chapter1.oneEditAway('pale','bale')).toBe(true)
    })
    test('should return false for oneEditAway("pale","bale")', () => {
        expect(chapter1.oneEditAway('pale','bake')).toBe(false)
    })
    test('should return true for oneEditAway("apple","aple")', () => {
        expect(chapter1.oneEditAway('apple','aple')).toBe(true)
    })
    test('should return true for oneEditAway("aple", "apple")', () => {
        expect(chapter1.oneEditAway('aple', 'apple')).toBe(true)
    })
    test('should return false for oneEditAway("aplese", "apple")', () => {
        expect(chapter1.oneEditAway('aplese', 'apple')).toBe(false)
    })
    test('should return false for oneEditAway("apleses", "apple")', () => {
        expect(chapter1.oneEditAway('apleses', 'apple')).toBe(false)
    })
    test('should return false for oneEditAway("apple", "apleses")', () => {
        expect(chapter1.oneEditAway('apple', 'apleses')).toBe(false)
    })
    test('should return "a2b1c4a3" for stringCompression("aabccccaaa")', () => {
        expect(chapter1.stringCompression('aabccccaaa')).toBe('a2b1c4a3')
    })
    test('should return "a2b2a1b2c4a3" for stringCompression("aabbabbccccaaa")', () => {
        expect(chapter1.stringCompression('aabbabbccccaaa')).toBe('a2b2a1b2c4a3')
    })
    test('should return false for stringCompression("aabbabbccccaaacdeal")', () => {
        expect(chapter1.stringCompression('aabbabbccccaaacdeal')).toBe('aabbabbccccaaacdeal')
    })
    test('should return false for rotateMatriz(matrix)', () => {
        let matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        let correctResult = [
            [13, 9, 5 , 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4]
        ]
        expect(chapter1.rotateMatriz(matrix)).toStrictEqual(correctResult)
    })
    test('should return false for rotateMatriz(matrix)', () => {
        let matrix = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25],
        ]
        let correctResult = [
            [21, 16, 11, 6, 1],
            [22, 17, 12, 7, 2],
            [23, 18, 13, 8, 3],
            [24, 19, 14, 9, 4],
            [25, 20, 15, 10, 5],
        ]
        expect(chapter1.rotateMatriz(matrix)).toStrictEqual(correctResult)
    })
    test('should return false for rotateMatriz(matrix)', () => {
        let matriz = [
            [1, 2, 3, 4, 5],
            [6, 7, 0, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25],
        ]
        let correctResult = [
            [1, 2, 0, 4, 5],
            [0, 0, 0, 0, 0],
            [11, 12, 0, 14, 15],
            [16, 17, 0, 19, 20],
            [21, 22, 0, 24, 25],
        ]
        expect(chapter1.zeroMatriz(matriz)).toStrictEqual(correctResult)
    })
    test('should return false for rotateMatriz(matrix)', () => {
        let matriz = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 0, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25],
        ]
        let correctResult = [
            [1, 2, 0, 4, 5],
            [6, 7, 0, 9, 10],
            [0, 0, 0, 0, 0],
            [16, 17, 0, 19, 20],
            [21, 22, 0, 24, 25],
        ]
        expect(chapter1.zeroMatriz(matriz)).toStrictEqual(correctResult)
    })
    test('should return true for stringRotation("watterbottle", "erbottlewatt")', () => {
        expect(chapter1.stringRotation('watterbottle', 'erbottlewatt')).toBe(true)
    })
    test('should return false for stringRotation("watterbottle", "erbottlewatter")', () => {
        expect(chapter1.stringRotation('watterbottle', 'erbottlewatter')).toBe(false)
    })
    test('should return false for stringRotation("", "")', () => {
        expect(chapter1.stringRotation('', '')).toBe(false)
    })
})
