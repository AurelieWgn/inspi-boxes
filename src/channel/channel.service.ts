import { Injectable } from '@nestjs/common';
import { Channel } from './channel.model';
import { InjectModel } from '@nestjs/sequelize';
import { Channel_user } from 'src/channel_user/channel_user.model';
import { Box } from 'src/box/box.model';

@Injectable()
export class ChannelService {
  constructor(
    @InjectModel(Channel)
    private channelModel: typeof Channel,
    @InjectModel(Channel_user)
    private channelUserModel: typeof Channel_user,
  ) {}

  async create(newChannel: Channel, userId: number) {
    try {
      const resp = await this.channelModel.create({ ...newChannel });
      const newChanneluser = {
        channelId: resp.dataValues.id,
        userId: userId,
      };
      await this.channelUserModel.create(newChanneluser);
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

  async update(id: number, channel: Channel): Promise<Channel> {
    await this.channelModel.update(
      { ...channel },
      {
        where: {
          id: +id,
        },
      },
    );

    return channel;
  }

  async delete(id: string): Promise<void> {
    await this.channelModel.destroy({
      where: { id: +id },
    });
    await this.channelUserModel.destroy({
      where: { channelId: +id },
    });
  }
}
