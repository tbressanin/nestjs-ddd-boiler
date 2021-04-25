import { createConnection } from 'typeorm';

export const postgresDbProvider = {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'root',
        entities: [
            'dist/**/*.schema{.ts,.js}',
            'root/Infra/contexts/*/*.schema{.ts,.js}',
        ],
        synchronize: true,
    }),
}