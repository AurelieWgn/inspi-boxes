import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Box } from './box.model';
import { Note } from 'src/note/note.model';
import { Box_user } from 'src/box_user/box_user.model';

@Injectable()
export class BoxService {
  constructor(
    @InjectModel(Box)
    private boxModel: typeof Box,
    @InjectModel(Box_user)
    private boxUserModel: typeof Box_user,
  ) {}

  async create(newBox: Box, userId: number) {
    try {
      const resp = await this.boxModel.create({ ...newBox });
      const newBoxuser = {
        boxId: resp.dataValues.id,
        userId: userId,
      };
      await this.boxUserModel.create(newBoxuser);
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
