import { Injectable } from '@nestjs/common';
import { Channel } from './channel.model';
import { InjectModel } from '@nestjs/sequelize';
import { Box } from 'src/box/box.model';

@Injectable()
export class ChannelService {
  constructor(
    @InjectModel(Channel)
    private channelModel: typeof Channel,
  ) {}

  async create(newChannel: Channel) {
    try {
      const resp = await this.channelModel.create({ ...newChannel });
      return resp.dataValues;
    } catch (error) {
      return error;
    }
  }

  async findById(channelId: number): Promise<Channel | undefined> {
    return await this.channelModel.findOne({
      where: { id: channelId },
      include: [Box],
    });
  }
}
