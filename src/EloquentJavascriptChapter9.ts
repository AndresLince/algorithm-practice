/**
 * Regexp golf:
 * Code golf is a term used for the game of trying to express a particular
 * program in as few characters as possible. Similarly, regexp golf is the
 * practice of writing as tiny a regular expression as possible to match a
 * given pattern, and only that pattern.
 * For each of the following items, write a regular expression to test whether
 * any of the given substrings occur in a string. The regular expression should
 * match only strings containing one of the substrings described. Do not worry
 * about word boundaries unless explicitly mentioned. When your expression
 * works, see whether you can make it any smaller.
 * 1. car and cat
 * 2. pop and prop
 * 3. ferret, ferry, and ferrari
 * 4. Any word ending in ious
 * 5. A whitespace character followed by a period, comma, colon, or semicolon
 * 6. A word longer than six letters
 * 7. A word without the letter e (or E)
 */

export class EJC9 {
    codeGolf(exercise: number) {
        let validation = false;
        let regexp: RegExp;
        switch (exercise) {
            case 1:
                regexp = /ca[tr]/
                validation = this.verify(regexp, ["my car", "bad cats"], ["camper", "high art"]);
                break;
            case 2:
                regexp = /pr?op/
                validation = this.verify(regexp, ["pop culture", "mad props"], ["plop", "prrrop"]);
                break;
            case 3:
                regexp = /ferr(y|et|ari)/
                validation = this.verify(regexp, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
                break;
            case 4:
                regexp = /ious\b/
                validation = this.verify(regexp, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);
                break;
            case 5:
                regexp = / [.,';]/
                validation = this.verify(regexp, ["bad punctuation ."], ["escape the period"]);
                break;
            case 6:
                regexp = /\w{7}/
                validation = this.verify(regexp, ["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small words"]);
                break;
            case 7:
                regexp = /\b[^\We]+\b/i
                validation = this.verify(regexp, ["red platypus", "wobbling nest"], ["earth bed", "learning ape", "BEET"]);
                break;
            case 8:
                regexp = /ca[tr]/
                validation = this.verify(regexp, ["camper", "high art"], ["my car", "bad cats"]);
                break;
            case 9:
                regexp = /ca[tr]/
                validation = this.verify(regexp, ["my car", "bad cats"], ["my car", "bad cats"]);
                break;
            default:
                break;
        }
        return validation;
    }
    verify(regexp: RegExp, yes: Array<string>, no: Array<string>) {
        for (let str of yes) if (!regexp.test(str)) {
            console.log(`Failure to match '${str}'`);
            return false;
        }
        for (let str of no) if (regexp.test(str)) {
            console.log(`Unexpected match for '${str}'`);
            return false;
        }
        return true;
    }
    /**
     * Quoting style
     * Imagine you have written a story and used single quotation marks
     * throughout to mark pieces of dialogue. Now you want to replace all the
     * dialogue quotes with double quotes, while keeping the single quotes used
     * in contractions like aren't.
     * Think of a pattern that distinguishes these two kinds of quote usage and
     * craft a call to the replace method that does the proper replacement.
     */
    quotingStyle(text: string): string {
        return text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');
    }
    /**
     * Numbers again
     * Write an expression that matches only JavaScript-style numbers.It must
     * support an optional minus or plus sign in front of the number, the
     * decimal dot, and exponent notation—5e-3 or 1E10—again with an optional
     * sign in front of the exponent.Also note that it is not necessary for
     * there to be digits in front of or after the dot, but the number cannot
     * be a dot alone.That is, .5 and 5. are valid JavaScript numbers, but a
     * lone dot isn't.
     */
    numbersAgain(): boolean {
        let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
        const validNumbers = ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"];
        const invalidNumbers = ["1a", "+-1", "1.2.3", "1+1", "1e4.5",".5.", "1f5", "."];

        for (let str of validNumbers) {
            if (!number.test(str)) {
                console.log(`Failed to match '${str}'`);
                return false;
            }
        }

        for (let str of invalidNumbers) {
            if (number.test(str)) {
                console.log(`Incorrectly accepted '${str}'`);
                return false;
            }
        }

        return true;
    }
}
