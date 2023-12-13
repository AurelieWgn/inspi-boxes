import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ChannelService } from './channel.service';
import { Channel } from './channel.model';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelsServices: ChannelService) {}

  @UsePipes(new ValidationPipe({}))
  @UseGuards(AuthGuard)
  @Post()
  async createChannel(@Body() newChannel: Channel, @Request() req) {
    console.log('req', req.user);
    return await this.channelsServices.create(newChannel, req.user.sub);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Channel> {
    return await this.channelsServices.findById(id);
  }
}
