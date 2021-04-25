import { Module } from '@nestjs/common';
import { kafkaProvider } from './kafka/kafka.provider';
import { postgresDbProvider } from './db/postgres-db.provider';

const providers = [postgresDbProvider, kafkaProvider]

@Module({
    providers,
    exports: providers,
})
export class ProvidersModule { }