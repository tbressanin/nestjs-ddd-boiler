import { Module } from "@nestjs/common";
import { PresentationModule } from "root/Presentation/presentation.module";
import { ApplicationModule } from "root/Application/application.module";
import { DomainModule } from "root/Domain/domain.module";
import { InfraModule } from "root/Infra/infra.module";

@Module({
    imports: [
        PresentationModule,
        ApplicationModule,
        DomainModule,
        InfraModule
    ]
})
export class CrossModule { }