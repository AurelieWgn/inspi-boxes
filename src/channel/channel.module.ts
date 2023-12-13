import { Module } from '@nestjs/common';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Channel } from './channel.model';
import { Channel_user } from 'src/channel_user/channel_user.model';

@Module({
  imports: [SequelizeModule.forFeature([Channel, Channel_user])],
  controllers: [ChannelController],
  providers: [ChannelService],
  exports: [SequelizeModule],
})
export class ChannelModule {}
