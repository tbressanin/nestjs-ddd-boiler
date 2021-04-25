import { Account } from "root/Domain/entities/account.entity";
import { Connection } from "typeorm";
import { AccountSchema } from "./account.schema";

export const accountContext = [
    {
      provide: 'ACCOUNT_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(AccountSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];