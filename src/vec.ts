/**
    A vector type
    Write a class Vec that represents a vector in two-dimensional space.
    It takes x and y parameters (numbers), which it should save to
    properties of the same name.
    Give the Vec prototype two methods, plus and minus, that take another
    vector as a parameter and return a new vector that has the sum or
    difference of the two vectors (this and the parameter) x and y values.
    Add a getter property length to the prototype that computes the length
    of the vector—that is, the distance of the point (x, y) from the origin
    (0, 0).
*/
import operators from "./operators";

export class Vec{
    public x: number;
    public y: number;
    public operators = operators.Operators;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    plus(vec: Vec): Vec {
        return this.operate(vec, '+');
    }
    minus(vec: Vec) {
        return this.operate(vec, '-');
    }
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    operate(vec: Vec, operator: string) {
        let x = this.operators[operator](this.x, vec.x);
        let y = this.operators[operator](this.y, vec.y);
        let result = new Vec(x, y);
        return result;
    }
}