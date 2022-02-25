import { FileDto } from '../shared/dto/file.dto';
import { UserRegistration } from './dto/user-registration.dto';
import { UserService } from './user.service';
export declare class UserController {
    private service;
    constructor(service: UserService);
    registerUser(body: UserRegistration, file: FileDto): Promise<{
        statusCode: number;
        message: string;
        data: any[];
    } | {
        statusCode: number;
        message: string;
        data: import("./dto/user-registration.dto").UserRegistrationResponseDto;
    }>;
    getSingleUser(id: string): Promise<import("./user.schema").User & {
        _id: any;
    }>;
}
