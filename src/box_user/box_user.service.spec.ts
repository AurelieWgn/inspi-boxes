import { Test, TestingModule } from '@nestjs/testing';
import { BoxUserService } from './box_user.service';

describe('BoxUserService', () => {
  let service: BoxUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoxUserService],
    }).compile();

    service = module.get<BoxUserService>(BoxUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
