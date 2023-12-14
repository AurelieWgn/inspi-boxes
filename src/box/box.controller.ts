import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoxService } from './box.service';
import { Box } from './box.model';
import { AuthGuard } from 'src/auth/auth.guard';

@UsePipes(new ValidationPipe({}))
@UseGuards(AuthGuard)
@Controller('box')
export class BoxController {
  constructor(private readonly boxsServices: BoxService) {}

  @Get()
  async findAll(): Promise<Box[]> {
    return await this.boxsServices.findAll();
  }

  @Post()
  async createUser(@Body() newBox: Box, @Request() req) {
    return await this.boxsServices.create(newBox, req.user.sub);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Box> {
    return await this.boxsServices.findById(id);
  }

  @Patch(':id')
  async updateBox(@Param('id') id: number, @Body() box: Box): Promise<Box> {
    return await this.boxsServices.update(id, box);
  }

  @Delete(':id')
  async deleteBox(@Param('id') id: string) {
    return await this.boxsServices.delete(id);
  }
}
