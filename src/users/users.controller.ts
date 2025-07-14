import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";

// http://localhost:3000/users

@Controller('users')
export class UsersController {
    usersService: UsersService;

    constructor() {
        this.usersService = new UsersService();
    }

    @Get()
    getUsers(@Query() query: string) {
        return this.usersService.getAllUsers();
    }

    @Get(":id")
    getUserById(@Param("id", ParseIntPipe) id: number,
        @Query('limit', ParseIntPipe) limit: number,
        @Query('page', ParseIntPipe) page: number,
    ) {

        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        // this.usersService.createUser(user);
        return "A new user has been created!";
    }
}