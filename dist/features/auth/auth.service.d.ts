import { User } from '@features/user/user.schema';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginUserDto } from './dto/login.dto';
export declare class AuthService {
    jwtService: JwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UserService);
    login(loginUser: LoginUserDto): Promise<any>;
    _createToken(user_id: string, type: string): any;
    validateUser(userId: string): Promise<User>;
}
