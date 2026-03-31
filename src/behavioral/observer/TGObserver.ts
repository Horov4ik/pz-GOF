import { Observer } from "./Observer";

export class TGObserver implements Observer {
  update(event: string, data: unknown): void {
    console.log(`  [TG] Надіслано повідомлення про "${event}"`);
  }
}
