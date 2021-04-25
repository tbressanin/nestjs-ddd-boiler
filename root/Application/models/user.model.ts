import { ApiProperty } from "@nestjs/swagger";
import { AccountModel } from "./account.model";
import { IsNotEmpty, IsEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';

export class UserModel {
    @Exclude()
    id: string;

    @ApiProperty({ type: 'string' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ type: 'string' })
    @IsNotEmpty()
    surname: string;

    @ApiProperty({ type: AccountModel})
    @IsEmpty()
    account: AccountModel;
}
