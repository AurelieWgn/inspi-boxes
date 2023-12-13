import { Test, TestingModule } from '@nestjs/testing';
import { ChannelUserController } from './channel_user.controller';

describe('ChannelUserController', () => {
  let controller: ChannelUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChannelUserController],
    }).compile();

    controller = module.get<ChannelUserController>(ChannelUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
