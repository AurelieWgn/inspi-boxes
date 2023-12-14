import { Injectable } from '@nestjs/common';
import { Note } from './note.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class NoteService {
  constructor(
    @InjectModel(Note)
    private noteModel: typeof Note,
  ) {}

  async create(newNote: Note) {
    try {
      const resp = await this.noteModel.create({ ...newNote });
      return resp.dataValues;
    } catch (error) {
      return error;
    }
  }

  async findById(noteId: number): Promise<Note | undefined> {
    return await this.noteModel.findOne({
      where: { id: noteId },
    });
  }

  async update(id: number, note: Note): Promise<Note> {
    await this.noteModel.update(
      { ...note },
      {
        where: {
          id: +id,
        },
      },
    );

    return note;
  }

  async delete(id: string): Promise<void> {
    await this.noteModel.destroy({
      where: { id: +id },
    });
  }

  async findByBoxId(boxId: number): Promise<Note[] | undefined> {
    return await this.noteModel.findAll({
      where: { boxId: boxId },
    });
  }
}
