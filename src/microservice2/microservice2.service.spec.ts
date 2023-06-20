import { Test, TestingModule } from '@nestjs/testing';
import { Microservice2Service } from './microservice2.service';

describe('Microservice2Service', () => {
  let service: Microservice2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Microservice2Service],
    }).compile();

    service = module.get<Microservice2Service>(Microservice2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
