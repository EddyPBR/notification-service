import { Module } from "@nestjs/common";
import { HttpModule } from "./infra/http/http.module";
import { DatabaseModule } from "./infra/database/database.module";
import { MessagingModule } from "@infra/messaging/kafka/messaging.module";

@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
