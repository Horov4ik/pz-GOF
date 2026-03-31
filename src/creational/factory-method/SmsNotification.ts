import { Notification } from "./Notification";

export class SmsNotification implements Notification {
  send(message: string): void {
    console.log(`  📱 SMS: ${message}`);
  }
}
