import { Module } from "@nestjs/common";
import { InfraModule } from "root/Infra/infra.module";
import { UserContext } from "./services/contexts";

const services = [UserContext.UserConsumer, UserContext.UserService]

@Module({
    imports: [InfraModule],
    providers: services,
    exports: services
})

export class ApplicationModule { }