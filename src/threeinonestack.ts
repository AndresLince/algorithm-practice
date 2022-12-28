/**
 * 3.1
 * Three in One: Describe how you could use a single array to implement
 * three stacks.
 */
export class ThreeInOneStack{
    array: any[] = [];
    length: number;
    arrayLastPosition: number[];
    arrayStartPosition: number[];
    arrayCurrentPosition: number[];
    constructor(length: number) {
        this.length = length;
        const firstLength = Math.floor(length / 3);
        this.arrayLastPosition = [
            firstLength - 1,
            firstLength * 2 - 1,
            length - 1
        ]
        this.arrayStartPosition = [
            0,
            firstLength,
            firstLength * 2
        ]
        this.arrayCurrentPosition = [
            0,
            firstLength,
            firstLength * 2
        ]
    }
    push(data: any, stack: number) {
        if (stack > 3) {
            throw new Error("WrongStackException");
        }
        const currentPosition = this.arrayCurrentPosition[stack - 1];
        const lastPosition = this.arrayLastPosition[stack - 1];

        if(currentPosition > lastPosition) {
            throw new Error("FullStackException");
        }
        this.array[currentPosition] = data;
        this.arrayCurrentPosition[stack - 1] = currentPosition + 1;
    }
    pop(stack: number): any {
        const currentPosition = this.arrayCurrentPosition[stack - 1];
        const startPosition = this.arrayStartPosition[stack - 1];
        if (currentPosition == startPosition) {
            throw new Error("EmptyStackException");
        }
        const data = this.array[currentPosition - 1];
        this.arrayCurrentPosition[stack - 1] = currentPosition - 1;
        return data;
    }
    isEmpty(stack: number) {
        const currentPosition = this.arrayCurrentPosition[stack - 1];
        const startPosition = this.arrayStartPosition[stack - 1];
        return currentPosition == startPosition;
    }
    peak(stack: number) {
        const currentPosition = this.arrayCurrentPosition[stack - 1];
        const startPosition = this.arrayStartPosition[stack - 1];
        if (currentPosition == startPosition) {
            throw new Error("EmptyStackException");
        }
        return this.array[currentPosition - 1];
    }
}