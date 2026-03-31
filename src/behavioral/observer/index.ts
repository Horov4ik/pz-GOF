// ========== Observer ==========
// Проблема: коли стан одного об'єкта змінюється, потрібно автоматично
// повідомити всіх залежних (наприклад, UI-компоненти, логери, аналітику).
// Рішення: підписники реєструються у видавця і отримують оновлення.

interface Observer {
  update(event: string, data: unknown): void;
}

class EventEmitter {
  private listeners: Map<string, Observer[]> = new Map();

  subscribe(event: string, observer: Observer): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(observer);
  }

  unsubscribe(event: string, observer: Observer): void {
    const list = this.listeners.get(event);
    if (list) {
      this.listeners.set(event, list.filter(o => o !== observer));
    }
  }

  emit(event: string, data: unknown): void {
    const list = this.listeners.get(event) ?? [];
    for (const observer of list) {
      observer.update(event, data);
    }
  }
}

// Конкретний спостерігач — логер
class LogObserver implements Observer {
  update(event: string, data: unknown): void {
    console.log(`  [LOG] Подія "${event}": ${JSON.stringify(data)}`);
  }
}

// Конкретний спостерігач — email-сповіщення
class EmailObserver implements Observer {
  update(event: string, data: unknown): void {
    console.log(`  [EMAIL] Надіслано лист про "${event}"`);
  }
}

// --- Демонстрація ---
export function demo() {
  console.log("=== Observer (Event System) ===");

  const store = new EventEmitter();
  const logger = new LogObserver();
  const emailer = new EmailObserver();

  store.subscribe("order:created", logger);
  store.subscribe("order:created", emailer);
  store.subscribe("order:shipped", logger);

  store.emit("order:created", { id: 1, item: "Ноутбук" });
  store.emit("order:shipped", { id: 1, tracking: "UA123456" });

  // Відписуємося від email-сповіщень
  store.unsubscribe("order:created", emailer);
  console.log("  (email відписано)");
  store.emit("order:created", { id: 2, item: "Телефон" });
  console.log();
}

demo();
