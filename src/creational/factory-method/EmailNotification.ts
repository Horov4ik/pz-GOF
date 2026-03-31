import { Notification } from "./Notification";

export class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`  📧 Email: ${message}`);
  }
}
