import { Observer } from "./Observer";

export class LogObserver implements Observer {
  update(event: string, data: unknown): void {
    console.log(`  [LOG] Подія "${event}": ${JSON.stringify(data)}`);
  }
}
