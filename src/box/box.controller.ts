import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoxService } from './box.service';
import { Box } from './box.model';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('box')
export class BoxController {
  constructor(private readonly boxsServices: BoxService) {}

  @UsePipes(new ValidationPipe({}))
  @UseGuards(AuthGuard)
  @Post()
  async createUser(@Body() newBox: Box, @Request() req) {
    return await this.boxsServices.create(newBox, req.user.sub);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Box> {
    return await this.boxsServices.findById(id);
  }
}
