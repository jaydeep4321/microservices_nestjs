import { NestFactory } from '@nestjs/core';
import { Microservice2Module } from './microservice2.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(Microservice2Module, {
    transport: Transport.TCP,
    options: { port: 4000 },
  });
  await app.listen();
}
bootstrap();
