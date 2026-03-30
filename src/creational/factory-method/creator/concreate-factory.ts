import { Circle, Rectangle, Square } from "../concrete";
import { IShape } from "../interface/shape.interface";
import { ShapeFactory } from "./shape-factory";

export class CircleFactory extends ShapeFactory {
  public render(): void {
    console.log(`drawing the circle`);
  }

  public override createShape(): IShape {
    this.render();
    return new Circle(10);
  }
}

export class SquareFactory extends ShapeFactory {
  public render(): void {
    console.log(`drawing the square`);
  }

  public override createShape(): IShape {
    this.render();
    return new Square(10);
  }
}

export class RectangleFactory extends ShapeFactory {
  public render(): void {
    console.log(`drawing the rectangle`);
  }

  public override createShape(): IShape {
    this.render();
    return new Rectangle(10, 20);
  }
}
