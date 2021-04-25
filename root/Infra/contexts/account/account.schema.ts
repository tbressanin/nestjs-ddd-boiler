import { Account } from "root/Domain/entities/account.entity";
import { EntitySchema } from "typeorm";

export const AccountSchema = new EntitySchema<Account>({
    name: 'Account',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        email: {
            type: String
        },

        password: {
            type: String
        }
    },
    relations: {
        user: {
            type: 'one-to-one',
            target: 'User', // UserSchema,
            joinColumn: true,
            nullable: true 
        },
        profile: {
            type: 'many-to-one',
            target: 'Profile', // ProfileSchema
            joinColumn: true,
            nullable: true
        }
    }
});