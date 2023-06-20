import { Test, TestingModule } from '@nestjs/testing';
import { Microservice1Service } from './microservice1.service';

describe('Microservice1Service', () => {
  let service: Microservice1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Microservice1Service],
    }).compile();

    service = module.get<Microservice1Service>(Microservice1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
