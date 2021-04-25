import { Controller, Get, Inject } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserModel } from "root/Application/models/user.model";
import { IUserService } from "root/Application/services/interfaces/IUser.interface";
import { UserService } from "root/Application/services/contexts/user/user.service";
import { BaseController } from "../base.controller";

@ApiTags('UserConsumer')
@Controller('consumer/user')
export class UserConsumerController extends BaseController<any>{

    constructor(
        @Inject(UserService) private readonly userService: IUserService
    ) {
        super();
    }

    @Get('list')
    async listUser(): Promise<UserModel[]> {
        return await this.userService.list();
    }
}