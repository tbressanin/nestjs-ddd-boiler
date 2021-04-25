import { Inject, Injectable, Scope } from "@nestjs/common";
import { KafkaService } from "root/Infra/providers/kafka/kafka.service";

@Injectable({ scope: Scope.DEFAULT })
export class UserConsumer {
    constructor(
        @Inject('KAFKA_PROVIDER') private readonly kafkaService: KafkaService) {
    }
}