import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './note.model';

@Module({
  imports: [SequelizeModule.forFeature([Note])],
  controllers: [NoteController],
  providers: [NoteService],
  exports: [SequelizeModule],
})
export class NoteModule {}
