import { Node } from "./LinkedList";

export interface LinkedListAdder {
    addToResult(node: Node, number: number): void;
}

export class PrependAdder implements LinkedListAdder {
    public addToResult(node: Node, number: number): void {
        node.prepend(number);
    }
}

export class AppendToTailAdder implements LinkedListAdder {
    public addToResult(node: Node, number: number): void {
        node.appendToTail(number);
    }
}