import { CircleFactory, SquareFactory } from "./creator/concreate-factory";

const circleFactory = new CircleFactory();
const circle = circleFactory.createShape();
circle.draw(); // Output: Drawing a Circle

const squareFactory = new SquareFactory();
const square = squareFactory.createShape();
square.draw(); // Output: Drawing a Square
