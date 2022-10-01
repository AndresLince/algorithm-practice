export class Practice{
    private chars =  {
        '{' : '}',
        '[' : ']',
        '(' : ')',
    }

    validateOpenAndClose(string: string, index1: number, index2: number, internal: boolean): any {
        if (!string[index1] || !string[index2]) {
            return {valid:false};
        }

        if (!this.chars[string[index1]]) {
            return { valid: false };
        }
        if (this.chars[string[index2]]) {
            const response = this.validateOpenAndClose(string, index2, index2 + 1, true)
            if (!response.valid) {
                return { valid: false };
            }
            return this.validateOpenAndClose(string, index1, response.lastIndex + 1, true)
        }

        if (string[index2] == this.chars[string[index1]]) {
            if (internal) {
                return { valid: true, lastIndex: index2 };
            }
            if (string[index1 + 2]) {
                return this.validateOpenAndClose(string, index1 + 2, index1 + 3, false);
            }
            return { valid: true };
        }

        return { valid: false };
    }
}


