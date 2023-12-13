import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Box_user } from './box_user.model';
import { BoxUserService } from './box_user.service';

@Controller('box-user')
export class BoxUserController {
  constructor(private readonly boxUserServices: BoxUserService) {}

  @UsePipes(new ValidationPipe({}))
  @Post()
  async createUser(@Body() newBoxuser: Box_user) {
    await this.boxUserServices.create(newBoxuser);
  }
}
