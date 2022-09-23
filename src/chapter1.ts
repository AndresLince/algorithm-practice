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
}
