import {
  Notification,
  NotificationProps,
} from "@application/entities/notification";
import { Content } from "@application/entities/content";

export function makeNotification(override: Partial<NotificationProps> = {}) {
  return new Notification({
    category: "social",
    content: new Content("Nota solicitação de amizade!"),
    recipientId: "recipient-1",
    ...override,
  });
}
