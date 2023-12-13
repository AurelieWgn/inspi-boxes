import { Module } from '@nestjs/common';
import { ChannelUserController } from './channel_user.controller';
import { ChannelUserService } from './channel_user.service';
import { Channel_user } from './channel_user.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Channel_user])],
  controllers: [ChannelUserController],
  providers: [ChannelUserService],
  exports: [SequelizeModule],
})
export class ChannelUserModule {}
