import { Injectable } from '@nestjs/common';
import { Box_user } from './box_user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BoxUserService {
  constructor(
    @InjectModel(Box_user)
    private boxuserModel: typeof Box_user,
  ) {}

  async create(newBoxuser: Box_user) {
    try {
      await this.boxuserModel.create({ ...newBoxuser });
    } catch (error) {
      return error;
    }
  }
}
