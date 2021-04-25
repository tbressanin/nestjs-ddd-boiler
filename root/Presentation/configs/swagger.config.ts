import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { OpenAPIObject, } from '@nestjs/swagger';

export class SwaggerConfig {

    public document: OpenAPIObject;

    constructor(private app: INestApplication) {

        const config = new DocumentBuilder()
            .setTitle('Swagger - POC NestJs')
            .setDescription('Here be Dragons!')
            .setVersion('0.1')
            .build();

        SwaggerModule.setup('swagger', app, SwaggerModule.createDocument(this.app, config));
    }
}