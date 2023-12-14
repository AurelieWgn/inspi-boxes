import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
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

  @Get(':id')
  async findByBoxId(@Param('id') boxId: number): Promise<Note[]> {
    return await this.notesServices.findByBoxId(boxId);
  }

  @Patch(':id')
  async updateNote(@Param('id') id: number, @Body() note: Note): Promise<Note> {
    return await this.notesServices.update(id, note);
  }

  @Delete(':id')
  async deleteNote(@Param('id') id: string) {
    return await this.notesServices.delete(id);
  }
}
