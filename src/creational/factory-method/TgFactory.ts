import { Notification } from "./Notification";
import { NotificationFactory } from "./NotificationFactory";
import { SmsNotification } from "./SmsNotification";
import {TgNotification} from "./TgNotification";

export class TgFactory extends NotificationFactory {
  createNotification(): Notification {
    return new TgNotification();
  }
}
