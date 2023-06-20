import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Microservice1Module } from './microservice1/microservice1.module';
import { Microservice2Module } from './microservice2/microservice2.module';
// import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [Microservice1Module, Microservice2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
