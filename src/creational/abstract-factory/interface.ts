//create a interface for the abstract factory
export interface IPayment {
  type: string;
  processPayment(amount: number): void;
}

//expand the abstract factory to include a loyalty program - just for paypal
export interface ILoyaltyProgram {
  enroll(): void;
}
//create a new interface for the paypal factory that includes both payment and loyalty program - no break the abstract factory pattern rule
export interface IPaypalWithLoyaltyProgram {
  createPayment(): IPayment;
  createLoyaltyProgram(): ILoyaltyProgram;
}
