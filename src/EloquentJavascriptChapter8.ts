class MultiplicatorUnitFailure extends Error { }

export class EJC7{
    primitiveMultiply(a: number, b: number) {
        if (Math.random() < 0.2) {
            return a * b;
        } else {
            throw new MultiplicatorUnitFailure("Klunk");
        }
    }
    reliableMultiply(a: number, b: number) {

    }
}