import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dtos/update-user.dto";

// http://localhost:3000/users

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

    @Get()
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Param() param: GetUserParamDto,
    ) {
        // console.log("Param", param);
        return this.usersService.getAllUsers();
    }

    @Get(":id")
    getUserById(@Param("id", ParseIntPipe) id: number) {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        // this.usersService.createUser(user);
        return "A new user has been created!";
    }

    @Patch()
    updateUser(@Body() user: UpdateUserDto) {
        console.log(user);
        return "Updated Successfully!"
    }
}