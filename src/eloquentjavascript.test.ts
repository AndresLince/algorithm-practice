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
});