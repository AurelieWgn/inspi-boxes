import { Test, TestingModule } from '@nestjs/testing';
import { BoxUserController } from './box_user.controller';

describe('BoxUserController', () => {
  let controller: BoxUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoxUserController],
    }).compile();

    controller = module.get<BoxUserController>(BoxUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
