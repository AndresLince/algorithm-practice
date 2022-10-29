import { Node } from "./LinkedList";

export class EloquentJavascriptExercises {
    /**
        Looping a triangle
        Write a loop that makes seven calls to console.log to output the following triangle:

        #
        ##
        ###
        ####
        #####
        ######
        #######
    */
    loopingATriangle(number: number = 7): string {
        let triangle: string = '';
        let row: string = '';
        while (row.length < number) {
            row += '#';
            triangle += row + '\n';
        }
        return triangle;
    }
    /**
        FizzBuzz

        Write a program that uses console.log to print all the numbers from 1
        to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
        instead of the number, and for numbers divisible by 5 (and not 3),
        print "Buzz" instead.
        When you have that working, modify your program to print "FizzBuzz" for
        numbers that are divisible by both 3 and 5 (and still print "Fizz" or
        "Buzz" for numbers divisible by only one of those).
        (This is actually an interview question that has been claimed to weed
        out a significant percentage of programmer candidates. So if you solved
        it, your labor market value just went up.)
     */
    fizzBuzz(): string {
        let result = '';
        for (let i = 1; i <= 100; i++) {
            let isDivisibleBy3 = (i % 3 == 0);
            let isDivisibleBy5 = (i % 5 == 0);
            if (isDivisibleBy3 && !isDivisibleBy5) {
                result += 'Fizz' + '\n';
                continue;
            }
            if (isDivisibleBy5 && !isDivisibleBy3) {
                result += 'Buzz' + '\n';
                continue;
            }
            if (isDivisibleBy5 && isDivisibleBy3) {
                result += 'FizzBuzz' + '\n';
                continue;
            }
        }
        return result;
    }
    /**
        Write a program that creates a string that represents an 8×8 grid,
        using newline characters to separate lines. At each position of the
        grid there is either a space or a "#" character. The characters should
        form a chessboard.
        Passing this string to console.log should show something like this:

         # # # #
        # # # #
         # # # #
        # # # #
         # # # #
        # # # #
         # # # #
        # # # #

        When you have a program that generates this pattern, define a binding
        size = 8 and change the program so that it works for any size,
        outputting a grid of the given width and height.
     */
    createGrid(width: number, height: number): string {
        let grid: string = '';
        for (let i = 0; i < height; i++) {
            if (i % 2 == 0) {
                grid += this.createRow(width, ' ', '#');
            } else {
                grid += this.createRow(width, '#', ' ');
            }
        }
        return grid;
    }

    createRow(width: number, pairChar: string, oddChar: string): string {
        let row: string = '';
        for (let j = 0; j < width; j++) {
            if (j % 2 == 0) {
                row += pairChar;
            } else {
                row += oddChar;
            }
        }
        return row + '\n';
    }

    /**
        We’ve seen that % (the remainder operator) can be used to test whether
        a number is even or odd by using % 2 to see whether it’s divisible by
        two. Here’s another way to define whether a positive whole number is
        even or odd:
        Zero is even.
        One is odd.
        For any other number N, its evenness is the same as N - 2.
        Define a recursive function isEven corresponding to this description.
        The function should accept a single parameter (a positive, whole
        number) and return a Boolean.
        Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
     */
    isEven(number: number): boolean {
        if (number < 0) {
            number = number * -1;
        }
        if (number == 0) {
            return true;
        }
        if (number == 1) {
            return false;
        }
        return this.isEven(number - 2);
    }

    /**
        You can get the Nth character, or letter, from a string by writing
        "string"[N]. The returned value will be a string containing only one
        character (for example, "b"). The first character has position 0, which
        causes the last one to be found at position string.length - 1. In other
        words, a two-character string has length 2, and its characters have
        positions 0 and 1.
        Write a function countBs that takes a string as its only argument and
        returns a number that indicates how many uppercase “B” characters there
        are in the string.
        Next, write a function called countChar that behaves like countBs,
        except it takes a second argument that indicates the character that is
        to be counted (rather than counting only uppercase “B” characters).
        Rewrite countBs to make use of this new function.
     */
    countBs(string: string): number {
        return this.countChar(string, 'B');
    }
    countChar(string: string, char: string): number {
        let counter: number = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] == char) {
                counter++;
            }
        }
        return counter;
    }

    /**
        Exercises
        The sum of a range
        The introduction of this book alluded to the following as a nice way to
        compute the sum of a range of numbers:
        console.log(sum(range(1, 10)));
        Write a range function that takes two arguments, start and end, and
        returns an array containing all the numbers from start up to (and
        including) end.
        Next, write a sum function that takes an array of numbers and returns
        the sum of these numbers. Run the example program and see whether it
        does indeed return 55.
        As a bonus assignment, modify your range function to take an optional
        third argument that indicates the “step” value used when building the
        array. If no step is given, the elements go up by increments of one,
        corresponding to the old behavior. The function call range(1, 10, 2)
        should return [1, 3, 5, 7, 9]. Make sure it also works with negative
        step values so that range(5, 2, -1) produces [5, 4, 3, 2].
     */
    range(start: number, end: number, step: number = 1): Array<number> {
        let range: Array<number> = [];
        let operator = '+';
        let comparator = '<=';
        let operators = {
            '+': (a: number, b: number) => a + b,
            '-': (a: number, b: number) => a - b,
        }
        let comparators = {
            '<=': (a: number, b: number) => a <= b,
            '>=': (a: number, b: number) => a >= b,
        }
        if (step < 0) {
            step = step * -1;
            operator = '-';
            comparator = '>=';
        }
        for (let i: any = start; comparators[comparator](i, end); i = operators[operator](i, step)) {
            range.push(i);
        }
        return range;
    }
    sum(arrayOfNumbers: Array<number>): number {
        let sum: number = 0;
        arrayOfNumbers.forEach((element: any) => {
            sum += element;
        })
        return sum;
    }
    /**
        Reversing an array
        Arrays have a reverse method that changes the array by inverting the
        order in which its elements appear. For this exercise, write two
        functions, reverseArray and reverseArrayInPlace. The first,
        reverseArray, takes an array as argument and produces a new array
        that has the same elements in the inverse order. The second,
        reverseArrayInPlace, does what the reverse method does: it modifies the
        array given as argument by reversing its elements. Neither may use the
        standard reverse method.
        Thinking back to the notes about side effects and pure functions in the
        previous chapter, which variant do you expect to be useful in more
        situations? Which one runs faster?
     */
    reverseArray(array: Array<any>): Array<any> {
        let newArray: Array<any> = []
        for (let i = array.length - 1; i >= 0; i--) {
            newArray.push(array[i]);
        }
        return newArray;
    }
    reverseArrayInPlace(array: Array<any>): Array<any> {
        let startIndex = 0;
        let endIndex = array.length - 1;
        while (startIndex != endIndex) {
            let startValue = array[startIndex];
            array[startIndex] = array[endIndex];
            array[endIndex] = startValue;
            startIndex++;
            endIndex--;
        }
        return array;
    }
    /**
        A list
        Objects, as generic blobs of values, can be used to build all sorts of
        data structures. A common data structure is the list (not to be
        confused with array). A list is a nested set of objects, with the first
        object holding a reference to the second, the second to the third, and
        so on.
        let list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        A nice thing about lists is that they can share parts of their
        structure. For example, if I create two new values
        {value: 0, rest: list} and {value: -1, rest: list} (with list referring
        to the binding defined earlier), they are both independent lists, but
        they share the structure that makes up their last three elements. The
        original list is also still a valid three-element list.

        Write a function arrayToList that builds up a list structure like the
        one shown when given [1, 2, 3] as argument. Also write a listToArray
        function that produces an array from a list. Then add a helper function
        prepend, which takes an element and a list and creates a new list that
        adds the element to the front of the input list, and nth, which takes a
        list and a number and returns the element at the given position in the
        list (with zero referring to the first element) or undefined when there
        is no such element.

        If you haven’t already, also write a recursive version of nth.
    */
    arrayToList(array: Array<number>) {
        let node: Node = new Node(array[0]);
        for(let i = 1; i < array.length; i++) {
            node.appendToTail(array[i]);
        }
        return node;
    }
}
