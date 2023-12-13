import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Channel_user } from './channel_user.model';

@Injectable()
export class ChannelUserService {
  constructor(
    @InjectModel(Channel_user)
    private channeluserModel: typeof Channel_user,
  ) {}

  async create(newChanneluser: Channel_user) {
    try {
      await this.channeluserModel.create({ ...newChanneluser });
    } catch (error) {
      return error;
    }
  }
}
