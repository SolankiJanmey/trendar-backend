import { User } from '@features/user/user.schema';
import { AuthService } from '../auth.service';
declare const JWTStrategy_base: new (...args: any[]) => any;
export declare class JWTStrategy extends JWTStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(paylpad: any): Promise<User>;
}
export {};
