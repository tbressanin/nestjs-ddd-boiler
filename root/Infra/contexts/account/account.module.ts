import { Module } from "@nestjs/common";
import { ProvidersModule } from "root/Infra/providers/providers.module";
import { Repository } from "typeorm";
import { accountContext } from "./account.context";
import { AccountRepository } from "./account.repository";

const providers = [Repository, AccountRepository, ...accountContext];

@Module({
    imports: [ProvidersModule],
    providers,
    exports: providers
})
export class AccountModule { }