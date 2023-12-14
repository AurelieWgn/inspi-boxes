import { IsNotEmpty } from 'class-validator';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Box_user } from 'src/box_user/box_user.model';
import { Channel } from 'src/channel/channel.model';
import { Note } from 'src/note/note.model';
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

  @HasMany(() => Note)
  notes: Note[];

  @BelongsToMany(() => User, () => Box_user)
  users: User[];
}
