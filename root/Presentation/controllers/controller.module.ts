import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ApplicationModule } from "root/Application/application.module";
import { LoggerMiddleware } from "../middleware/logger.middleware";
import { UserController } from "./api/user.controller";
import { UserConsumerController } from "./consumers/user.consumer";

@Module({
    imports: [ApplicationModule],
    controllers: [UserController, UserConsumerController]
})

export class ControllerModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('*')
    }
}