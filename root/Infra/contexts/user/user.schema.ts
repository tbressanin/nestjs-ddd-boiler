import { User } from "root/Domain/entities/user.entity";
import { EntitySchema } from "typeorm";

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String,
            nullable: false
        },
        surname: {
            type: String,
            nullable: false
        }
    },
    relations: {
        account: {
            type: 'one-to-one',
            target: 'Account',
            joinColumn: true,
            nullable: true // CategoryEntity
        }
    }
});