import { Controller, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

// http://localhost:3000/users

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query() query: string) {
        const usersService = new UsersService();
        return usersService.getAllUsers();
    }

    @Get(":id")
    getUserById(@Param("id", ParseIntPipe) id: number,
        @Query('limit', ParseIntPipe) limit: number,
        @Query('page', ParseIntPipe) page: number,
    ) {

        const usersSevice = new UsersService();
        return usersSevice.getUserById(+id);
    }

    @Post()
    createUser() {
        const user = { id: 3, name: "Klopp", email: "klopp@gmail.com", age: 55, gender: "male", isMarried: true }
        const usersService = new UsersService();
        usersService.createUser(user);
        return "A new user has been created!";
    }
}