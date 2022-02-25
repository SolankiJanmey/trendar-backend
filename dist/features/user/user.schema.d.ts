import { Document } from 'mongoose';
export declare class User extends Document {
    firstName: string;
    lastName: string;
    profileImageUrl: string;
    userType: string;
    birthDate: Date;
    email: string;
    phone: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, any>;
