import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: "notifications",
        brokers: ["handy-burro-9921-us1-kafka.upstash.io:9092"],
        sasl: {
          mechanism: "scram-sha-256",
          username:
            "aGFuZHktYnVycm8tOTkyMSSfCl0qPCfMMiM35EmvRicpZH7hKFKmcIg_xqJZxCk",
          password:
            "tVSd3XLMWuTueZR6g3uJ02Ahj1Cp_Li-LvHXBCgAoWmW1cHhuoH026Vxhj1_Jok5S9w5Gg==",
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
