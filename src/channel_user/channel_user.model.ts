import { IsNotEmpty } from 'class-validator';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { Channel } from 'src/channel/channel.model';
import { User } from 'src/users/users.model';

@Table
export class Channel_user extends Model {
  @ForeignKey(() => User)
  @IsNotEmpty()
  @Column
  userId: number;

  @ForeignKey(() => Channel)
  @IsNotEmpty()
  @Column
  channelId: number;
}
