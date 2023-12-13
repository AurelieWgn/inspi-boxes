import { IsNotEmpty } from 'class-validator';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { Box } from 'src/box/box.model';
import { User } from 'src/users/users.model';

@Table
export class Box_user extends Model {
  @ForeignKey(() => User)
  @IsNotEmpty()
  @Column
  userId: number;

  @ForeignKey(() => Box)
  @IsNotEmpty()
  @Column
  boxId: number;
}
