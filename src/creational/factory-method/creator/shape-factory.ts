import { IShape } from "../interface/shape.interface";



export abstract class ShapeFactory {
  public abstract render(): void;

  public abstract createShape(): IShape;
}
