export class Chapter1 {
    hasAllUniqueCharacters(string: string): boolean {
        const characters = {};
        for (let i = 0; i < string.length; i++) {
            if (characters[string[i]]) {
                return false;
            }
            characters[string[i]] = 1;
        }
        return true;
    }
    checkPermutation(string1: string, string2: string): boolean {
        if (string1.length !== string2.length) {
            return false;
        }
        const letters: any = {};
        for(let i = 0; i < string1.length; i++) {
            if (letters[string1[i]]) {
                letters[string1[i]]++;
            } else {
                letters[string1[i]] = 1;
            }
        }

        for (let i = 0; i < string2.length; i++) {

            if (!letters[string2[i]]) {
                return false;
            }

            letters[string2[i]]--;
            if (letters[string2[i]] < 0) {
                return false;
            }
        }
        return true;
    }
    urlify(string: string, length: number) : string {
        let emptyCharts = this.countCharts(string, ' ', 0, length);
        let longIndex = length + (emptyCharts * 2) - 1;
        let shortIndex = length - 1;

        while (shortIndex >= 0) {
            if (string[shortIndex] == ' ') {
                string = this.setCharAt(string, longIndex, '0')
                string = this.setCharAt(string, longIndex - 1, '2')
                string = this.setCharAt(string, longIndex - 2, '%')
                longIndex = longIndex - 3;
            } else {
                string = this.setCharAt(string, longIndex, string[shortIndex])
                longIndex--;
            }
            shortIndex--;
        }
        return string
    }

    setCharAt(string: string, index: number, chr: string): string {
        if (index > string.length - 1) return string;
        return string.substring(0, index) + chr + string.substring(index + 1);
    }

    countCharts(string: string, chart:string, from: number, to: number): number {
        let counter = 0;
        for (var i = from; i < to - 1; i ++) {
            if (string[i] == chart) {
                counter++;
            }
        }
        return counter;
    }
    isAPalindromePermutation(string:string): boolean {
        string = string.toLowerCase();
        const charObject: any = {};
        for(let i = 0; i < string.length; i++) {
            if (string[i] == ' ') {
                continue;
            }
            if (!charObject[string[i]]) {
                charObject[string[i]] = 1;
            } else {
                charObject[string[i]]++;
            }
        }
        let oddCounter = 0;
        for (const property in charObject) {
            if (this.isOddNumber(charObject[property])) {
                if (oddCounter == 1) {
                    return false;
                }
                oddCounter++;
            }
        }
        return true;
    }

    isOddNumber(number: number):boolean {
        return number % 2 == 0 ? false: true;
    }

    oneEditAway(string1: string, string2: string): boolean {
        const length1 = string1.length;
        const length2 = string2.length;
        if (Math.abs(length1 - length2) > 1) {
            return false;
        }
        if (length1 == length2) {
            return this.validateOneEdit(string1, string2);
        }

        if (length1 < length2) {
            return this.validateOneInsert(string1, string2);
        }
        if (length1 > length2) {
            return this.validateOneInsert(string2, string1);
        }
    }

    validateOneEdit(string1: string, string2: string): boolean {
        let diffCount = 0;
        for (let i = 0; i < string1.length; i++) {
            if (string1[i] != string2[i]) {
                if (diffCount == 1) {
                    return false;
                }
                diffCount++;
            }
        }
        return true;
    }

    validateOneInsert(string1: string, string2: string): boolean {
        let index1 = 0;
        let index2 = 0;
        while (index2 < string2.length && index1 < string1.length ) {
            if (string1[index1] != string2[index2]) {
                if (index1 != index2) {
                    return false;
                }
                index2++;
            } else {
                index1++;
                index2++;
            }
        }
        return true;
    }

    stringCompression(string: string): string {
        let newString = ''
        let letterCount = 0;
        let lastLetter = string[0];
        for (let i = 0;i < string.length; i++) {
            if (string[i] != lastLetter) {
                newString += lastLetter + letterCount;
                letterCount = 0;
            }
            letterCount++;
            lastLetter = string[i];
        }
        newString += lastLetter + letterCount;
        if (newString.length > string.length) {
            return string;
        }

        return newString;
    }
}
