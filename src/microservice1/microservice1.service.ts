import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class Microservice1Service {
  @MessagePattern('message1')
  handleMessage1(payload: any): string {
    return 'Received Message 1: ' + payload;
  }
}
