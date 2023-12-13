import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Get(':email')
  async findByEmail(@Param('email') email: string): Promise<User> {
    return await this.usersServices.findByEmail(email);
  }

  @Post()
  async createUser(@Body() newUser: User) {
    await this.usersServices.create(newUser);
  }
}
