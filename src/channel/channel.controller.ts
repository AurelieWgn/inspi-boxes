import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ChannelService } from './channel.service';
import { Channel } from './channel.model';
import { AuthGuard } from 'src/auth/auth.guard';

@UsePipes(new ValidationPipe({}))
@UseGuards(AuthGuard)
@Controller('channel')
export class ChannelController {
  constructor(private readonly channelsServices: ChannelService) {}

  @Post()
  async createChannel(@Body() newChannel: Channel, @Request() req) {
    console.log('req', req.user);
    return await this.channelsServices.create(newChannel, req.user.sub);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Channel> {
    return await this.channelsServices.findById(id);
  }

  @Patch(':id')
  async updateChannel(
    @Param('id') id: number,
    @Body() channel: Channel,
  ): Promise<Channel> {
    return await this.channelsServices.update(id, channel);
  }

  @Delete(':id')
  async deleteChannel(@Param('id') id: string) {
    return await this.channelsServices.delete(id);
  }
}
