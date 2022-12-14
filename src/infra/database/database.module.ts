import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/application/repositories/notification-repository";
import { PrismaService } from "../database/prisma.service";
import { PrismaNotificationRepository } from "./prisma/repositories/prisma-notifications-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
