import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Box } from 'src/box/box.model';
import { Box_user } from 'src/box_user/box_user.model';
import { Channel } from 'src/channel/channel.model';
import { Channel_user } from 'src/channel_user/channel_user.model';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @BelongsToMany(() => Channel, () => Channel_user)
  channels: Channel[];

  @BelongsToMany(() => Box, () => Box_user)
  boxes: Box[];
}
