//create a interface for the abstract factory
export interface IPayment {
  type: string;
  processPayment(amount: number): void;
}
