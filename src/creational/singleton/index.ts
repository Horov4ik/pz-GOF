// ========== Singleton ==========
// Проблема: потрібен лише один екземпляр класу на всю програму
// (наприклад, підключення до БД, логер, конфігурація).
// Рішення: клас сам контролює створення єдиного екземпляра.

class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    this.logs.push(`[${new Date().toISOString()}] ${message}`);
    console.log(`  LOG: ${message}`);
  }

  getHistory(): string[] {
    return [...this.logs];
  }
}

// --- Демонстрація ---
export function demo() {
  console.log("=== Singleton (Logger) ===");

  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();

  logger1.log("Запуск програми");
  logger2.log("Підключення до БД");

  console.log(`  Це один і той самий об'єкт: ${logger1 === logger2}`);
  console.log(`  Історія (${logger1.getHistory().length} записів)`);
  console.log();
}

demo();
