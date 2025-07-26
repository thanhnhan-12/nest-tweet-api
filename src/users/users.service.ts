import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UsersService {
    constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService) { }

    users: { id: number, name: string, email: string, gender: string, isMarried: boolean, password: String }[] = [
        { id: 1, name: "Joel", email: "joel@gmail.com", gender: "male", isMarried: false, password: "text1234" },
        { id: 2, name: "Avram", email: "avram@gmail.com", gender: "male", isMarried: false, password: "text1234" },
        { id: 3, name: "Taylor", email: "taylor@gmail.com", gender: "female", isMarried: false, password: "text1234" },
    ];

    getAllUsers() {
        if (this.authService.isAuthenticated) {
            return this.users;
        }

        return "You are not logged in"
    }

    getUserById(id: Number) {
        return this.users.find(x => x.id === id);
    }

    createUser(user: { id: number, name: string, email: string, gender: string, isMarried: boolean, password: String }) {
        this.users.push(user);
    }

}