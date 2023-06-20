import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { fork } from 'child_process';
import { Microservice1Module } from './microservice1/microservice1.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(Microservice1Module, {
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });

  // const moduleAProcess = fork(
  //   'dist/microservice1/microservice1.microservice.js',
  // );
  // const moduleBProcess = fork(
  //   'dist/microservice2/microservice2.microservice.js',
  // );

  // const microservice1 = app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: { port: 3001 },
  // });

  // const microservice2 = app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: { port: 4000 },
  // });

  // await app.startAllMicroservices();
  // await app.listen(8000);

  await app.listen();
}

bootstrap();
