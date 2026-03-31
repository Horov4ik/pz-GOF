import { PaymentStrategy } from "./PaymentStrategy";

export class CreditCardPayment implements PaymentStrategy {
  constructor(private cardNumber: string) {}
  pay(amount: number): string {
    return `Оплата ${amount} грн карткою *${this.cardNumber.slice(-4)}`;
  }
}
