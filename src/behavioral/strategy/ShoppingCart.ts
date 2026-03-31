import { PaymentStrategy } from "./PaymentStrategy";

export class ShoppingCart {
  private items: { name: string; price: number }[] = [];

  addItem(name: string, price: number): void {
    this.items.push({ name, price });
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  checkout(strategy: PaymentStrategy): string {
    const total = this.getTotal();
    return strategy.pay(total);
  }
}
