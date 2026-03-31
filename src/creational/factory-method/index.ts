// ========== Factory Method ==========
// Проблема: клієнтський код не повинен залежати від конкретних класів,
// які він створює. Наприклад, система сповіщень — email, SMS, push.
// Рішення: делегувати створення об'єктів підкласам через фабричний метод.

interface Notification {
  send(message: string): void;
}

class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`  📧 Email: ${message}`);
  }
}

class SmsNotification implements Notification {
  send(message: string): void {
    console.log(`  📱 SMS: ${message}`);
  }
}

class PushNotification implements Notification {
  send(message: string): void {
    console.log(`  🔔 Push: ${message}`);
  }
}

// Фабрика
abstract class NotificationFactory {
  abstract createNotification(): Notification;

  notify(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

class EmailFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

class SmsFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SmsNotification();
  }
}

class PushFactory extends NotificationFactory {
  createNotification(): Notification {
    return new PushNotification();
  }
}

// --- Демонстрація ---
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
