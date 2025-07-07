import { Controller, Get, Post } from "@nestjs/common";

// http://localhost:3000/users

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return "Get All Users"
    }

    @Post()
    createUser() {
        return "Create New Users"
    }
}