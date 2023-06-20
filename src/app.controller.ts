import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  client: any;
  constructor(private readonly appService: AppService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    });
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  async handleMessage1(): Promise<any> {
    console.log('here');
    const pattern = 'message1';
    const payload = 'Hello, Microservice 1!';
    const data = await this.client.send(pattern, payload).toPromise();
    console.log(data);
  }
}
