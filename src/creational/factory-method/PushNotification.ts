import { Notification } from "./Notification";

export class PushNotification implements Notification {
  send(message: string): void {
    console.log(`  🔔 Push: ${message}`);
  }
}
