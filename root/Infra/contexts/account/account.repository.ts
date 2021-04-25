import { Inject, Injectable } from "@nestjs/common";
import { AccountSchema } from './account.schema';
import { IAccountRepository } from "root/Domain/interfaces/repositories/IAccount.repository";
import { Repository } from "typeorm";

@Injectable()
export class AccountRepository implements IAccountRepository {

    constructor(@Inject('ACCOUNT_REPOSITORY') public readonly repository: Repository<Account>) { }

    public saveEntity = async (obj: Account) => {
        return this.repository.save(obj).then(res => {
            return obj;
        });
    }

    listEntity: () => Promise<Account[]>;
    getEntity: (filters: { id: string; }) => Promise<Account>;
    updateEntity: (obj: Account) => Promise<Account>;
    deleteEntity: (id: string) => Promise<boolean>;
}