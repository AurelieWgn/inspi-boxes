import { Module } from '@nestjs/common';
import { BoxController } from './box.controller';
import { BoxService } from './box.service';
import { Box } from './box.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Box_user } from 'src/box_user/box_user.model';

@Module({
  imports: [SequelizeModule.forFeature([Box, Box_user])],
  controllers: [BoxController],
  providers: [BoxService],
  exports: [SequelizeModule],
})
export class BoxModule {}
