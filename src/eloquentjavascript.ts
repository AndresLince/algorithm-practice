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
}