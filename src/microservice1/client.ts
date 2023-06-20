import { ClientProxyFactory, Transport } from '@nestjs/microservices';
// const { ClientProxyFactory, Transport } = require'@nestjs/microservices'

async function main() {
  const microserviceClient = ClientProxyFactory.create({
    transport: Transport.TCP,
    options: {
      port: 3000,
    },
  });

  const pattern = 'message1';
  const payload = 'Hello, Microservice 1!';

  try {
    const response = await microserviceClient
      .send(pattern, payload)
      .toPromise();
    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    await microserviceClient.close();
  }
}

main();
