import { Inject, Injectable } from "@nestjs/common";
import { UserSchema } from './user.schema';
import { IUserRepository } from "root/Domain/interfaces/repositories/IUser.repository";
import { Repository } from "typeorm";
import { User } from "root/Domain/entities/user.entity";

@Injectable()
export class UserRepository implements IUserRepository {

    constructor(@Inject('USER_REPOSITORY') public readonly repository: Repository<User>) { }

    public saveEntity = async (obj: User) => {
        return this.repository.save(obj).then(res => {
            return obj;
        });
    }

    public listEntity = async () => {
        return this.repository.find().then(res => {
            return res;
        });
    }

    public getEntity = async (filters: { id: string; }) => {
        return await this.repository.findOne(filters.id);
    }

    updateEntity: (obj: User) => Promise<User>;
    deleteEntity: (id: string) => Promise<boolean>;

}