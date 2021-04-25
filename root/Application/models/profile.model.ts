import { ProfileType } from 'root/Domain/enums/profile-type.enum';
import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty } from 'class-validator';

export class ProfileModel {
    @IsEmpty()
    @ApiProperty()
    public id: string;

    @IsNotEmpty()
    @ApiProperty()
    public name: string;

    @IsNotEmpty()
    @ApiProperty({
        type: 'enum',
        enum: ProfileType,
        default: ProfileType.User
    })

    public type: ProfileType;
}