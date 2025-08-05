import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";

import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

import { UsersService } from "./users.service";

// http://localhost:3000/users

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    getUsers() {
        return this.usersService.getAllUsers();
    }

    // @Get(":id")
    // getUserById(@Param("id", ParseIntPipe) id: number) {
    //     return this.usersService.getUserById(id);
    // }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        this.usersService.createUser(user);
    }

    // @Patch()
    // updateUser(@Body() user: UpdateUserDto) {
    //     console.log(user);
    //     return "Updated Successfully!"
    // }
}