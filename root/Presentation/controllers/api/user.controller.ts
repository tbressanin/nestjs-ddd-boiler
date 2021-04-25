import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserModel } from 'root/Application/models/user.model';
import { IUserService } from 'root/Application/services/interfaces/IUser.interface';
import { UserService } from 'root/Application/services/contexts/user/user.service';
;
import { BaseController } from '../base.controller';

@ApiTags('User')
@Controller('api')
export class UserController extends BaseController<UserModel> {

    constructor(
        @Inject(UserService) private readonly userService: IUserService
    ) {
        super();
    }

    @Get('users')
    async getUsers(): Promise<UserModel[]> {
        return await this.userService.list();
    }

    @Get('user/:id')
    async getUser(@Param('id') id: string): Promise<UserModel> {
        return await this.userService.get(id);
    }

    @Post('user')
    async saveUser(@Body() userModel: UserModel): Promise<UserModel> {
        return await this.userService.create(userModel);
    }

    @Put('user/:id')
    async updateUser(@Body() userModel: UserModel): Promise<UserModel> {
        return await this.userService.update(userModel);
    }

    @Delete('user/:id')
    async deleteUser(@Query() id: string): Promise<boolean> {
        return await this.userService.delete(id)
    }
}
