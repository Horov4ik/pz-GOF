import { PaymentStrategy } from "./PaymentStrategy";

export class AliPay implements PaymentStrategy {
  constructor(private email: string) {}
  pay(amount: number): string {
    return `Оплата ${amount} грн через AliPay (${this.email})`;
  }
}
