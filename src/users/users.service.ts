import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { passwordEncrypt } from './users.utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  private readonly users = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      pwd: 'admin',
    },
    {
      id: 2,
      name: 'Aurélie',
      email: 'aurelie@gmail.com',
      pwd: 'admin',
    },
  ];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ where: { email: email } });
  }

  async create(newUser: User) {
    const encryptednNewUser = {
      ...newUser,
      password: await passwordEncrypt(newUser.password),
    };

    this.userModel.create({ ...encryptednNewUser });
  }
}
