import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ControllerModule } from "./controllers/controller.module";
import { LoggerMiddleware } from "./middleware/logger.middleware";

@Module({
    imports: [ControllerModule]
})

export class PresentationModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('*')
    }
}