import { CreditCardPayment, PayPalPayment } from "./concrete";

const main = () => {
  //create instance
  const paypalPayment = new PayPalPayment();
  const creditCardPayment = new CreditCardPayment();

  //call process payment
  paypalPayment.processPayment(100);
  creditCardPayment.processPayment(200);
};

main();
