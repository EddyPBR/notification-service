import { SendNotification } from "@application/use-cases/send-notification";
import { DatabaseModule } from "@infra/database/database.module";
import { NotificationsController } from "@infra/http/controllers/notifications.controller";
import { Module } from "@nestjs/common";
import { KafkaConsumerService } from "./kafka/kafka-consumer.service";

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
