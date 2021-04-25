import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty } from 'class-validator';
import { ProfileModel } from './profile.model';
import { UserModel } from "./user.model";

export class AccountModel {
    @IsEmpty()
    id: string;

    @IsNotEmpty()
    @ApiProperty({ type: 'string' })
    password: string;

    @IsNotEmpty()
    @ApiProperty({ type: 'string' })
    email: string;

    @IsEmpty()
    @ApiProperty({ type: 'UserModel' })
    user: UserModel;

    @IsNotEmpty()
    @ApiProperty({ type: ProfileModel })
    profile: ProfileModel;
}