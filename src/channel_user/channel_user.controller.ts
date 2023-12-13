import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ChannelUserService } from './channel_user.service';
import { Channel_user } from './channel_user.model';

@Controller('channel-user')
export class ChannelUserController {
  constructor(private readonly channelUserServices: ChannelUserService) {}

  @UsePipes(new ValidationPipe({}))
  @Post()
  async createUser(@Body() newChanneluser: Channel_user) {
    await this.channelUserServices.create(newChanneluser);
  }
}
