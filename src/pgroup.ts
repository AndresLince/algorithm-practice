import { Group } from "./group";

/**
 * Eloquent javascript book | chapter 7 | exercise 3
 * Persistent group
 * Most data structures provided in a standard JavaScript environment aren't
 * very well suited for persistent use. Arrays have slice and concat methods,
 * which allow us to easily create new arrays without damaging the old one. But
 * Set, for example, has no methods for creating a new set with an item added
 * or removed.
 * Write a new class PGroup, similar to the Group class from Chapter 6, which
 * stores a set of values. Like Group, it has add, delete, and has methods.
 * Its add method, however, should return a new PGroup instance with the given
 * member added and leave the old one unchanged. Similarly, delete creates a
 * new instance without a given member.
 * The class should work for values of any type, not just strings. It does not
 * have to be efficient when used with large amounts of values.
 * The constructor shouldn't be part of the class's interface (though you'll
 * definitely want to use it internally). Instead, there is an empty instance,
 * PGroup.empty, that can be used as a starting value.
 * Why do you need only one PGroup.empty value, rather than having a function
 * that creates a new, empty map every time?
 */
export class PGroup{
    public static empty: PGroup = new PGroup();
    public group: any[] = [];
    add(value: any):PGroup {
        if (!this.has(value)) {
            let newGroup = new PGroup();
            newGroup.group = this.group.concat(value);
            return newGroup;
        }
    }
    has(value: any) {
        return this.group.indexOf(value) >= 0;
    }
    delete(value: any):PGroup {
        let index = this.group.indexOf(value);
        if (index !== -1) {
            let newGroup = new PGroup();
            newGroup.group = this.group.slice().filter((item) => value !== item);
            return newGroup;
        }
    }
}