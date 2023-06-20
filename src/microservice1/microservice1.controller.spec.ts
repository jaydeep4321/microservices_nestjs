import { Test, TestingModule } from '@nestjs/testing';
import { Microservice1Controller } from './microservice1.controller';

describe('Microservice1Controller', () => {
  let controller: Microservice1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Microservice1Controller],
    }).compile();

    controller = module.get<Microservice1Controller>(Microservice1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
