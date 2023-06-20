import { Test, TestingModule } from '@nestjs/testing';
import { Microservice2Controller } from './microservice2.controller';

describe('Microservice2Controller', () => {
  let controller: Microservice2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Microservice2Controller],
    }).compile();

    controller = module.get<Microservice2Controller>(Microservice2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
