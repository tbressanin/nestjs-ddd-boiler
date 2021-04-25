import { Profile } from "root/Domain/entities/profile.entity";
import { ProfileType } from "root/Domain/enums/profile-type.enum";
import { EntitySchema } from "typeorm";

export const ProfileSchema = new EntitySchema<Profile>({
    name: 'Profile',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String
        },
        type: {
            type: String,
            enum: ProfileType,
            nullable: false,
            default: ProfileType.User
        },
    }
});