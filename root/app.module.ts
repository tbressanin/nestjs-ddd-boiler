import { Module } from '@nestjs/common';
import { ApplicationModule } from './Application/application.module';
import { InfraModule } from './Infra/infra.module';
import { CrossModule } from './Cross/cross.module';

@Module({
    imports: [
        ApplicationModule,
        InfraModule,
        ApplicationModule,
        CrossModule
    ],
})
export class AppModule { }
