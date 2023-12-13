import { Module } from '@nestjs/common';
import { BoxController } from './box.controller';
import { BoxService } from './box.service';
import { Box } from './box.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Box])],
  controllers: [BoxController],
  providers: [BoxService],
  exports: [SequelizeModule],
})
export class BoxModule {}
