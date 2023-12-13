import { Module } from '@nestjs/common';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Channel } from './channel.model';

@Module({
  imports: [SequelizeModule.forFeature([Channel])],
  controllers: [ChannelController],
  providers: [ChannelService],
  exports: [SequelizeModule],
})
export class ChannelModule {}
