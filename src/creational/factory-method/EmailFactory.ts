import { Notification } from "./Notification";
import { NotificationFactory } from "./NotificationFactory";
import { EmailNotification } from "./EmailNotification";

export class EmailFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}
