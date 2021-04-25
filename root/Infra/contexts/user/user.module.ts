import { Module } from "@nestjs/common";
import { ProvidersModule } from "root/Infra/providers/providers.module";
import { Repository } from "typeorm";
import { userContext } from "./user.context";
import { UserRepository } from "./user.repository";

const providers = [Repository, UserRepository, ...userContext];

@Module({
    imports: [ProvidersModule],
    providers,
    exports: providers
})
export class UserModule { }