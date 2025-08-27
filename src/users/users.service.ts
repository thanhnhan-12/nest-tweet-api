import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Profile } from "src/profile/profile.entity";
import { CreateUserDto } from "./dtos/create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>
    ) { }

    getAllUsers() {
        return this.userRepository.find();
    }

    public async createUser(userDto: CreateUserDto) {
        try {
            // Create a Profile & Save
            userDto.profile = userDto.profile ?? {};

            // Create User Object
            let user = this.userRepository.create(userDto);

            // Save the user object
            return await this.userRepository.save(user);
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('Email or username already exists!');
            }
            throw new InternalServerErrorException(error.message);
        }
    }

}