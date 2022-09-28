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
}
