import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule, TweetModule, AuthModule, TypeOrmModule.forRoot({
    type: "mysql",
    entities: [],
    synchronize: true,
    host: "localhost",
    port: 3306,
    username: "user",
    password: "password",
    database: "tweet_api",
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
