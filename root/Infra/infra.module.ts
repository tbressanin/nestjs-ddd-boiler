import { Module } from "@nestjs/common";
import { ContextModule } from "./contexts/context.module";
import { IntegrationsModule } from "./integrations/integrations.module";
import { ProvidersModule } from "./providers/providers.module";

const modules = [
    ProvidersModule,
    ContextModule,
    IntegrationsModule
];

@Module({
    imports: modules,
    exports: modules
})

export class InfraModule { }