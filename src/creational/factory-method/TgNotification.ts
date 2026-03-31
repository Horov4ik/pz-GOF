import { Notification } from "./Notification";

export class TgNotification implements Notification {
  send(message: string): void {
    console.log(`  <3 TG: ${message}`);
  }
}
