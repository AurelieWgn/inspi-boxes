import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ChannelService } from './channel.service';
import { Channel } from './channel.model';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelsServices: ChannelService) {}

  @UsePipes(new ValidationPipe({}))
  @Post()
  async createUser(@Body() newChannel: Channel) {
    return await this.channelsServices.create(newChannel);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Channel> {
    return await this.channelsServices.findById(id);
  }
}
