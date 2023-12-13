import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoxService } from './box.service';
import { Box } from './box.model';

@Controller('box')
export class BoxController {
  constructor(private readonly boxsServices: BoxService) {}

  @UsePipes(new ValidationPipe({}))
  @Post()
  async createUser(@Body() newBox: Box) {
    return await this.boxsServices.create(newBox);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Box> {
    return await this.boxsServices.findById(id);
  }
}
