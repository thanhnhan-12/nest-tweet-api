import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly userService: UsersService) { }

    tweets: { text: String, date: Date, userId: Number }[] = [
        { text: "Some tweet", date: new Date("2025-11-12"), userId: 1 },
        { text: "Other tweet", date: new Date("2025-10-09"), userId: 2 },
        { text: "Some more", date: new Date("2025-08-08"), userId: 3 },
    ]

    getTweets(userId: Number) {
        const user = this.userService.getUserById(userId);
        const tweets = this.tweets.filter(t => t.userId === userId);
        const response = tweets.map(t => { return { text: t.text, date: t.date, name: user?.name } });
        return response;
    }

}   
