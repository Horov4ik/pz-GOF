import { PaymentStrategy } from "./PaymentStrategy";

export class CashPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `Оплата ${amount} грн готівкою`;
  }
}
