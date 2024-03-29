import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginUserDto: LoginUserDto): Promise<any>;
}
