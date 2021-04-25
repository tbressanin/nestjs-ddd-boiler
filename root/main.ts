import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './Presentation/configs/swagger.config';

async function bootstrap() {
    const port = 3000;

    const app = await NestFactory.create(AppModule, { logger: ['error', 'warn'] });

    new SwaggerConfig(app);
    
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(port);

    const url = await app.getUrl()

    console.warn('Running on port', 3000);
    console.warn('Swagger available on', `${url}/swagger`);
}

bootstrap();
