import { Module } from '@nestjs/common';
import { Microservice2Service } from './microservice2.service';
import { Microservice2Controller } from './microservice2.controller';

@Module({
  providers: [Microservice2Service],
  controllers: [Microservice2Controller],
})
export class Microservice2Module {}
