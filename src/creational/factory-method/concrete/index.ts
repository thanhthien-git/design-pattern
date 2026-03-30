//this is list of the concrete classes that implement the interface

import { IShape } from "../interface/shape.interface";

export class Circle implements IShape {
  private radius: number;

  public constructor(radius: number) {
    this.radius = radius;
  }

  public draw(): void {
    console.log(`draw the circle with radius : ${this.radius}`);
  }
}

export class Rectangle implements IShape {
  private width: number;
  private heigth: number;

  public constructor(height: number, width: number) {
    this.heigth = height;
    this.width = width;
  }

  public draw(): void {
    console.log(
      `draw the rectangle with heigth: ${this.heigth} and  width: ${this.width}`,
    );
  }
}

export class Square implements IShape {
  private edge: number;

  public constructor(edge: number) {
    this.edge = edge;
  }

  public draw(): void {
    console.log(`draw the square with edge : ${this.edge}`);
  }
}
