import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    users: { id: number, name: string, email: string, gender: string, isMarried: boolean }[] = [
        { id: 1, name: "Joel", email: "joel@gmail.com", gender: "male", isMarried: false, },
        { id: 2, name: "Avram", email: "avram@gmail.com", gender: "male", isMarried: false, },
        { id: 3, name: "Taylor", email: "taylor@gmail.com", gender: "female", isMarried: false, },
    ];

    getAllUsers() {
        return this.users;
    }

    getUserById(id: Number) {
        return this.users.find(x => x.id === id);
    }

    createUser(user: { id: number, name: string, email: string, gender: string, isMarried: boolean }) {
        this.users.push(user);
    }

}