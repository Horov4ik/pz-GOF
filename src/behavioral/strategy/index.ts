import { ShoppingCart } from "./ShoppingCart";
import { CreditCardPayment } from "./CreditCardPayment";
import { PayPalPayment } from "./PayPalPayment";
import { CashPayment } from "./CashPayment";

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
