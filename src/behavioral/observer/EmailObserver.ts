import { Observer } from "./Observer";

export class EmailObserver implements Observer {
  update(event: string, data: unknown): void {
    console.log(`  [EMAIL] Надіслано лист про "${event}"`);
  }
}
