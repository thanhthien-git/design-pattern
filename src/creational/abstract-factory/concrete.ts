import { IPayment } from "./interface";

export class CreditCardPayment implements IPayment {
  type: string = "Credit Card";

  processPayment(amount: number): void {
    console.log(`Processing ${amount} payment through ${this.type}`);
  }
}

export class PayPalPayment implements IPayment {
  type: string = "PayPal";

  processPayment(amount: number): void {
    console.log(`Processing ${amount} payment through ${this.type}`);
  }
}
