import {
  CreditCardPayment,
  PayPalPayment,
  PayPalWithLoyaltyProgram,
} from "./concrete";

const main = () => {
  //create instance
  const paypalPayment = new PayPalPayment();
  const creditCardPayment = new CreditCardPayment();
  const paypalWithLoyaltyProgram = new PayPalWithLoyaltyProgram();
  //call process payment
  paypalPayment.processPayment(100);
  creditCardPayment.processPayment(200);
  //call enroll in loyalty program
  const loyaltyProgram = paypalWithLoyaltyProgram.createLoyaltyProgram();
  const payment = paypalWithLoyaltyProgram.createPayment();
  payment.processPayment(300);
  loyaltyProgram.enroll();
};

main();
