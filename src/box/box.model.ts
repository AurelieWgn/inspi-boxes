import { IsNotEmpty } from 'class-validator';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Channel } from 'src/channel/channel.model';
import { User } from 'src/users/users.model';

@Table
export class Box extends Model {
  @IsNotEmpty()
  @Column
  name: string;

  @IsNotEmpty()
  @Column
  description: string;

  @ForeignKey(() => User)
  @Column
  author: number;

  @ForeignKey(() => Channel)
  @Column
  channelId: number;

  @BelongsTo(() => Channel)
  channel: Channel;
}
