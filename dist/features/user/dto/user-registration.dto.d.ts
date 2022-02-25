import { UserTypeEnum } from '@common/enums/user-type.enum';
export declare class UserRegistration {
    firstName: string;
    lastName: string;
    userType: string;
    birthDate?: Date;
    email?: string;
    password: string;
    phone?: string;
}
export declare class UserRegistrationResponseDto {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    profileImage: string;
    birthDate: string;
    phone: string;
    userType: UserTypeEnum;
    __v: number;
    id: string;
}
