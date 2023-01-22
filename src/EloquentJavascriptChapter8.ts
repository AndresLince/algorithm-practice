class MultiplicatorUnitFailure extends Error { }

export class EJC8 {
    /**
     * Retry
     * Say you have a function primitiveMultiply that in 20 percent of cases
     * multiplies two numbers and in the other 80 percent of cases raises an
     * exception of type MultiplicatorUnitFailure. Write a function that wraps this
     * clunky function and just keeps trying until a call succeeds, after which it
     * returns the result.
     * Make sure you handle only the exceptions you are trying to handle.
     */
    primitiveMultiply(a: number, b: number) {
        if (Math.random() < 0.2) {
            return a * b;
        } else {
            throw new MultiplicatorUnitFailure("Klunk");
        }
    }
    reliableMultiply(a: number, b: number) {
        try {
            return this.primitiveMultiply(a, b);
        } catch (error) {
            if (error instanceof MultiplicatorUnitFailure){
                console.log("MultiplicatorUnitFailure Error");
                return this.reliableMultiply(a, b);
            }
        }
    }
    /**
     * The locked box
     * Consider the following (rather contrived) object:
     * const box = {
     *   locked: true,
     *   unlock() { this.locked = false; },
     *   lock() { this.locked = true;  },
     *   _content: [],
     *   get content() {
     *     if (this.locked) throw new Error("Locked!");
     *     return this._content;
     *   }
     * };
     * It is a box with a lock. There is an array in the box, but you can get
     * at it only when the box is unlocked. Directly accessing the private
     * _content property is forbidden.
     * Write a function called withBoxUnlocked that takes a function value as
     * argument, unlocks the box, runs the function, and then ensures that the
     * box is locked again before returning, regardless of whether the argument
     * function returned normally or threw an exception.
     */
    public box = {
        locked: true,
        unlock() { this.locked = false; },
        lock() { this.locked = true; },
        _content: [],
        get content() {
            if (this.locked) throw new Error("Locked!");
            return this._content;
        }
    };
    withBoxUnlocked(body) {
        try {
            this.box.unlock();
            return body();
        } catch (error) {
            throw error;
        } finally{
            this.box.lock();
        }
    }
}
