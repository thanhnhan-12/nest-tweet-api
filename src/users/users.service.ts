import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { AuthService } from "src/auth/auth.service";

import { User } from "./user.entity";
import { CreateUserDto } from "./dtos/create-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    getAllUsers() {
        return this.userRepository.find();
    }

    public async createUser(userDto: CreateUserDto) {
        // Validate if a User exist with the given email
        const user = await this.userRepository.findOne({
            where: { email: userDto.email }
        })

        // Handle the error/ exception
        if (user) {
            return "The User with the given email already exists!";
        }

        // Create that User
        let newUser = this.userRepository.create(userDto);
        newUser = await this.userRepository.save(newUser);

        return newUser
    }

}