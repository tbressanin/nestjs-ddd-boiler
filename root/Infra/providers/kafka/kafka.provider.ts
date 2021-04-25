import { Global, Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';

export const kafkaProvider = {
    provide: 'KAFKA_PROVIDER',
    useFactory: (options: any) => {
        const clients = (options || []).map((item: any) => ({
            provide: item.name,
            useValue: new KafkaService(item.options),
        }));

        return {
            module: KafkaModule,
            providers: clients,
            exports: clients,
        }
    }
}

@Global()
@Module({})
export class KafkaModule { }