import { NestFactory } from '@nestjs/core';
import { Microservice1Module } from './microservice1.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(Microservice1Module, {
    transport: Transport.TCP,
    options: { port: 3001 },
  });
  await app.listen();
}
bootstrap();
