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

    rotateMatriz(matrix: Array<Array<number>>): Array<Array<number>> {
        let n = matrix.length;
        for(let layer = 0; layer < n / 2; layer++) {
            let first = layer;
            let last = n - 1 - layer;
            for (let i = first; i < last; i++){
                let offset = i - first;

                let top = matrix[first][i];

                // Left -> top
                matrix[first][i] = matrix[last - offset][first];
                // Botton -> left
                matrix[last - offset][first] = matrix[last][last - offset];
                // Right -> Botton
                matrix[last][last - offset] = matrix[i][last];
                // Top -> Right
                matrix[i][last] = top;
            }
        }
        return matrix;
    }

    zeroMatriz(matriz: Array<Array<number>>): Array<Array<number>> {
        let arrayRows: Array<number> = [];
        let arrayColumns: Array<number> = [];
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] == 0) {
                    if (!arrayRows[i]) {
                        arrayRows.push(i)
                    }
                    if (!arrayColumns[j]) {
                        arrayColumns.push(j)
                    }
                }
            }
        }
        arrayRows.forEach(row => {
            this.replaceRow(matriz, row, 0);
        });
        arrayColumns.forEach(column => {
            this.replaceColumn(matriz, column, 0);
        });

        return matriz;
    }

    replaceColumn(matriz: Array<Array<number>>, column: number, value: number): void {
        for (let i = 0; i < matriz.length; i++) {
            matriz[i][column] = value;
        }
    }
    replaceRow(matriz: Array<Array<number>>, row: number, value: number): void {
        for (let i = 0; i < matriz[row].length; i++) {
            matriz[row][i] = value;
        }
    }
}
