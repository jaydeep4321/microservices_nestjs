import { Controller, Get } from '@nestjs/common';
import { Microservice1Service } from './microservice1.service';

@Controller()
export class Microservice1Controller {
  constructor(private readonly appService: Microservice1Service) {}

  @Get()
  async getHello() {
    console.log('here in microservices 1');

    return this.appService.handleMessage1('Payload');
  }
}
