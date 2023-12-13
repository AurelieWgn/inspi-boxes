import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Box } from './box.model';
import { Note } from 'src/note/note.model';

@Injectable()
export class BoxService {
  constructor(
    @InjectModel(Box)
    private boxModel: typeof Box,
  ) {}

  async create(newBox: Box) {
    try {
      const resp = await this.boxModel.create({ ...newBox });
      return resp.dataValues;
    } catch (error) {
      return error;
    }
  }

  async findById(boxId: number): Promise<Box | undefined> {
    return await this.boxModel.findOne({
      where: { id: boxId },
      include: [Note],
    });
  }
}
