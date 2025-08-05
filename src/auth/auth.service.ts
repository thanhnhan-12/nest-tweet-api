import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(() => UsersService)) private readonly userService: UsersService) { }

    isAuthenticated: Boolean = false;

    login(email: String, pswd: String) {
        return "User does not exist!";
    }
}
