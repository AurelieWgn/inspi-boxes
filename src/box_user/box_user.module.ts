import { Module } from '@nestjs/common';
import { BoxUserController } from './box_user.controller';
import { BoxUserService } from './box_user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Box_user } from './box_user.model';

@Module({
  imports: [SequelizeModule.forFeature([Box_user])],
  controllers: [BoxUserController],
  providers: [BoxUserService],
  exports: [SequelizeModule],
})
export class BoxUserModule {}
