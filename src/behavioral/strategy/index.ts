// ========== Strategy ==========
// Проблема: потрібно динамічно змінювати алгоритм (наприклад, спосіб
// оплати, сортування, стиснення) без зміни основного коду.
// Рішення: виділити кожен алгоритм в окремий клас із спільним інтерфейсом.

interface PaymentStrategy {
  pay(amount: number): string;
}

class CreditCardPayment implements PaymentStrategy {
  constructor(private cardNumber: string) {}
  pay(amount: number): string {
    return `Оплата ${amount} грн карткою *${this.cardNumber.slice(-4)}`;
  }
}

class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}
  pay(amount: number): string {
    return `Оплата ${amount} грн через PayPal (${this.email})`;
  }
}

class CashPayment implements PaymentStrategy {
  pay(amount: number): string {
    return `Оплата ${amount} грн готівкою`;
  }
}

// Контекст
class ShoppingCart {
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

// --- Демонстрація ---
export function demo() {
  console.log("=== Strategy (Payment) ===");

  const cart = new ShoppingCart();
  cart.addItem("Ноутбук", 25000);
  cart.addItem("Миша", 500);

  console.log(`  Сума: ${cart.getTotal()} грн`);
  console.log(`  ${cart.checkout(new CreditCardPayment("1234567890121234"))}`);
  console.log(`  ${cart.checkout(new PayPalPayment("user@gmail.com"))}`);
  console.log(`  ${cart.checkout(new CashPayment())}`);
  console.log();
}

demo();
