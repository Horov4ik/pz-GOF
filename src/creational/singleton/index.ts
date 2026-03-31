import { Logger } from "./Logger";

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
