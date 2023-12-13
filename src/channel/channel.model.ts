import { IsNotEmpty } from 'class-validator';
import {
  BelongsToMany,
  Column,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Box } from 'src/box/box.model';
import { Channel_user } from 'src/channel_user/channel_user.model';
import { User } from 'src/users/users.model';

@Table
export class Channel extends Model {
  @IsNotEmpty()
  @Column
  name: string;

  @IsNotEmpty()
  @Column
  description: string;

  @Column
  private: boolean;

  // To avoid error for the channel requests who include associate Boxes
  // SequelizeEagerLoadingError: Box is not associated to Channel!
  @HasMany(() => Box)
  boxes: Box[];

  @BelongsToMany(() => User, () => Channel_user)
  users: User[];
}
