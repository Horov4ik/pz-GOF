import { PaymentStrategy } from "./PaymentStrategy";

export class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}
  pay(amount: number): string {
    return `Оплата ${amount} грн через PayPal (${this.email})`;
  }
}
