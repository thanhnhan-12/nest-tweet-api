import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { TweetModule } from './tweet/tweet.module';
import { UsersModule } from './users/users.module';

import { User } from './users/user.entity';

@Module({
  imports: [UsersModule, TweetModule, AuthModule, TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
      type: "mysql",
      entities: [User],
      synchronize: true,
      host: "localhost",
      port: 3306,
      username: "user",
      password: "password",
      database: "tweet_api",
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
