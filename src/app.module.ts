import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DATABASENAME, DIALECT, HOST, PASSWORD, USERNAME } from './env';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { ChannelModule } from './channel/channel.module';
import { BoxModule } from './box/box.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: DIALECT,
      username: USERNAME,
      password: PASSWORD,
      database: DATABASENAME,
      host: HOST,
      // models: [User],  don't need if autoLoadModels to true and synchronize: true
      autoLoadModels: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ChannelModule,
    BoxModule,
    NoteModule,
    // modules here
  ],

  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, UsersService],
})
export class AppModule {}
