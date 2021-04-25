import { Module } from "@nestjs/common";
import { AccountModule } from "./account/account.module";
import { UserModule } from "./user/user.module";

const modules = [UserModule, AccountModule];

@Module({
    imports: modules,
    exports: modules
})

export class ContextModule { }