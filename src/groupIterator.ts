import { Group } from "./group"

export class GroupIterator{
    public group: Group;
    public x: number;
    constructor(group) {
        this.group = group;
        this.x = 0;
    }

    next() {
        if (this.x === this.group.group.length) {
            return { done: true };
        }
        let value = this.group.group[this.x];
        this.x++;
        return { value, done: false}
    }
}