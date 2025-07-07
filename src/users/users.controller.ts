import { Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

// http://localhost:3000/users

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        const usersService = new UsersService();
        return usersService.getAllUsers();
    }

    @Post()
    createUser() {
        const user = { id: 3, name: "Klopp", age: 55, gender: "male", isMarried: true }
        const usersService = new UsersService();
        usersService.createUser(user);
        return "A new user has been created!";
    }
}