import { User } from "root/Domain/entities/user.entity";
import { IBaseRepository } from "./IBase.repository";

export interface IUserRepository extends IBaseRepository<User> {
    listEntity: () => Promise<Array<User>>
}