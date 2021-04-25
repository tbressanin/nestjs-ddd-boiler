import { User } from "root/Domain/entities/user.entity";
import { IBaseRepository } from "./IBase.repository";

export interface IAccountRepository extends IBaseRepository<Account> {
    listEntity: () => Promise<Array<Account>>
}