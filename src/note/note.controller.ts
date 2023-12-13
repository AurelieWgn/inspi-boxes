import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './note.model';

@Controller('note')
export class NoteController {
  constructor(private readonly notesServices: NoteService) {}

  @UsePipes(new ValidationPipe({}))
  @Post()
  async createUser(@Body() newNote: Note) {
    return await this.notesServices.create(newNote);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Note> {
    return await this.notesServices.findById(id);
  }
}
