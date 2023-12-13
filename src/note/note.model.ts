import { IsNotEmpty } from 'class-validator';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Box } from 'src/box/box.model';
import { User } from 'src/users/users.model';

@Table
export class Note extends Model {
  @IsNotEmpty()
  @Column
  title: string;

  @IsNotEmpty()
  @Column
  content: string;

  @Column
  image: string;

  @Column
  anonymous: boolean;

  @ForeignKey(() => User)
  @Column
  author: number;

  @ForeignKey(() => Box)
  @Column
  boxId: number;

  @BelongsTo(() => Box)
  box: Box;
}
