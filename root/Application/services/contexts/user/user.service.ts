import { Inject, Injectable } from "@nestjs/common";
import { User } from "root/Domain/entities/user.entity";
import { IUserRepository } from "root/Domain/interfaces/repositories/IUser.repository";
import { UserRepository } from "root/Infra/contexts/user/user.repository";
import { UserModel } from "../../../models/user.model";
import { BaseService } from "../../base.service";
import { IUserService } from "../../interfaces/IUser.interface";

@Injectable()
export class UserService extends BaseService<User, UserModel> implements IUserService {

    constructor(
        @Inject(UserRepository) private readonly userRepository: IUserRepository) {
        super(UserModel);
    }

    public async get(id: string): Promise<UserModel> {
        const result = await this.userRepository.getEntity({ id });
        return this.toModel(result);;
    }

    public async list(): Promise<Array<UserModel>> {
        return this.toModel(
            await this.userRepository.listEntity()
        );
    }

    public async create(model: UserModel): Promise<UserModel> {
        const entity: User = this.toEntity(model);

        return this.toModel(
            await this.userRepository.saveEntity(entity)
        );
    }

    public async update(model: UserModel): Promise<UserModel> {
        const entity: User = this.toEntity(model);
        const result: User = await this.userRepository.updateEntity(entity);

        return this.toModel(result);
    }

    public async delete(id: string) {
        return await this.userRepository.deleteEntity(id);
    }
}