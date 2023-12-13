import { IsNotEmpty } from 'class-validator';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Box } from 'src/box/box.model';

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
}
