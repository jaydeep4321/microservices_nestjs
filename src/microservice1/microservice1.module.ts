import { Module } from '@nestjs/common';
import { Microservice1Service } from './microservice1.service';
import { Microservice1Controller } from './microservice1.controller';

@Module({
  providers: [Microservice1Service],
  controllers: [Microservice1Controller],
})
export class Microservice1Module {}
