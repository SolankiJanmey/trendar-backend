import { LoginUserDto } from '@features/auth/dto/login.dto';
import { Model } from 'mongoose';
import { UserRegistration, UserRegistrationResponseDto } from './dto/user-registration.dto';
import { User } from './user.schema';
import { FileDto } from '../shared/dto/file.dto';
import { FileUploadService } from '@features/shared/file-upload/file-upload.service';
export declare class UserService {
    private readonly userModel;
    private fileUploadService;
    constructor(userModel: Model<User>, fileUploadService: FileUploadService);
    loginUser(user: LoginUserDto): Promise<any>;
    getUser(user_id: string): Promise<User & {
        _id: any;
    }>;
    registerUser(userDetails: UserRegistration, file: FileDto): Promise<{
        statusCode: number;
        message: string;
        data: any[];
    } | {
        statusCode: number;
        message: string;
        data: UserRegistrationResponseDto;
    }>;
}
