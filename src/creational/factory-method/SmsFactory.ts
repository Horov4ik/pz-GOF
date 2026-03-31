import { Notification } from "./Notification";
import { NotificationFactory } from "./NotificationFactory";
import { SmsNotification } from "./SmsNotification";

export class SmsFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SmsNotification();
  }
}
