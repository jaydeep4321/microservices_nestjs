import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class Microservice2Service {
  @MessagePattern('message2')
  handleMessage2(payload: any): string {
    return 'Received Message 2: ' + payload;
  }
}
