import {
  ILoyaltyProgram,
  IPayment,
  IPaypalWithLoyaltyProgram,
} from "./interface";

export class CreditCardPayment implements IPayment {
  type: string = "Credit Card";

  processPayment(amount: number): void {
    console.log(`Processing ${amount} payment through ${this.type}`);
  }
}

//create a new class for the paypal factory that implements the new interface
export class PayPalPayment implements IPayment {
  type: string = "PayPal";

  processPayment(amount: number): void {
    console.log(`Processing ${amount} payment through ${this.type}`);
  }
}

export class PayPalLoyaltyProgram implements ILoyaltyProgram {
  enroll(): void {
    console.log("Enrolling in PayPal Loyalty Program");
  }
}

export class PayPalWithLoyaltyProgram implements IPaypalWithLoyaltyProgram {
  createPayment(): IPayment {
    return new PayPalPayment();
  }

  createLoyaltyProgram(): ILoyaltyProgram {
    return new PayPalLoyaltyProgram();
  }
}
