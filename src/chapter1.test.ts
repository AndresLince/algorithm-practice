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
})
