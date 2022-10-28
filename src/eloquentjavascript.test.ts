import { EloquentJavascriptExercises } from './eloquentjavascript'

describe('Chapter1', () => {
    let exercises = new EloquentJavascriptExercises();
    test('should return a valid string for loopingATriangle()', () => {
        let response = "#\n##\n###\n####\n#####\n######\n#######\n";
        expect(exercises.loopingATriangle()).toBe(response)
    })
    test('should return a valid string for fizzBuzz()', () => {
        let response = "Fizz\nBuzz\nFizz\nFizz\nBuzz\nFizz\nFizzBuzz\nFizz\n"
        + "Buzz\nFizz\nFizz\nBuzz\nFizz\nFizzBuzz\nFizz\nBuzz\nFizz\nFizz\n"
        + "Buzz\nFizz\nFizzBuzz\nFizz\nBuzz\nFizz\nFizz\nBuzz\nFizz\n"
        + "FizzBuzz\nFizz\nBuzz\nFizz\nFizz\nBuzz\nFizz\nFizzBuzz\nFizz\n"
        + "Buzz\nFizz\nFizz\nBuzz\nFizz\nFizzBuzz\nFizz\nBuzz\nFizz\nFizz\nBuzz\n";
        expect(exercises.fizzBuzz()).toBe(response)
    })
    test('should return a valid string for createGrid(5, 5)', () => {
        let response = " # # \n# # #\n # # \n# # #\n # # \n";
        expect(exercises.createGrid(5, 5)).toBe(response)
    })
    test('should return a valid string for createGrid(3, 8)', () => {
        let response = " # \n# #\n # \n# #\n # \n# #\n # \n# #\n";
        expect(exercises.createGrid(3, 8)).toBe(response)
    })
    test('should return true for isEven(16)', () => {
        expect(exercises.isEven(16)).toBe(true)
    })
    test('should return false for isEven(15)', () => {
        expect(exercises.isEven(15)).toBe(false)
    })
    test('should return false for isEven(-5)', () => {
        expect(exercises.isEven(-5)).toBe(false)
    })
    test('should return 2 for countBs("ABCDEFGCHbB")', () => {
        expect(exercises.countBs("ABCDEFGCHbB")).toBe(2)
    })
    test('should return 0 for countBs("ACDFGHIJ")', () => {
        expect(exercises.countBs("ACDFGHIJ")).toBe(0)
    })
    test('should return expectedResponse for exercises.range(1, 10, 2)', () => {
        let expectedResponse = [1, 3, 5, 7, 9];
        expect(exercises.range(1, 10, 2)).toStrictEqual(expectedResponse)
    })
    test('should return expectedResponse for exercises.range(5, 2, -1)', () => {
        let expectedResponse = [5, 4, 3, 2];
        expect(exercises.range(5, 2, -1)).toStrictEqual(expectedResponse)
    })
    test('should return 55 for exercises.sum(exercises.range(1, 10))', () => {
        expect(exercises.sum(exercises.range(1, 10))).toBe(55)
    })
});
