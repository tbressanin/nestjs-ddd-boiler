import { Connection } from "typeorm";
import { UserSchema } from "./user.schema";

export const userContext = [
    {
      provide: 'USER_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(UserSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];