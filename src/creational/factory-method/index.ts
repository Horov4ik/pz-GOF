import { NotificationFactory } from "./NotificationFactory";
import { EmailFactory } from "./EmailFactory";
import { SmsFactory } from "./SmsFactory";
import { PushFactory } from "./PushFactory";

export function demo() {
  console.log("=== Factory Method (Notifications) ===");

  const factories: NotificationFactory[] = [
    new EmailFactory(),
    new SmsFactory(),
    new PushFactory(),
  ];

  for (const factory of factories) {
    factory.notify("Замовлення #123 підтверджено!");
  }
  console.log();
}

demo();
