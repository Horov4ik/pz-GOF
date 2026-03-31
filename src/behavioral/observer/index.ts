import { EventEmitter } from "./EventEmitter";
import { LogObserver } from "./LogObserver";
import { EmailObserver } from "./EmailObserver";
import {TGObserver} from "./TGObserver";

export function demo() {
  console.log("=== Observer (Event System) ===");

  const store = new EventEmitter();
  const logger = new LogObserver();
  const emailer = new EmailObserver();
  const telegram = new TGObserver();

  store.subscribe("order:created", logger);
  store.subscribe("order:created", emailer);
  store.subscribe("order:shipped", logger);
  store.subscribe("order:created", telegram);

  store.emit("order:created", { id: 1, item: "Ноутбук" });
  store.emit("order:shipped", { id: 1, tracking: "UA123456" });

  // Відписуємося від email-сповіщень
  store.unsubscribe("order:created", emailer);
  console.log("  (email відписано)");
  store.emit("order:created", { id: 2, item: "Телефон" });
  console.log();
}

demo();
