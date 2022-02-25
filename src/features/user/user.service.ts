import { LoginUserDto } from '@features/auth/dto/login.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import {
  UserRegistration,
  UserRegistrationResponseDto,
} from './dto/user-registration.dto';
import { code } from '@common/response/error-codes';
import { User } from './user.schema';
import { messages } from '@common/response/messages';
import { plainToClass } from 'class-transformer';
import { FileDto } from '../shared/dto/file.dto';
import { FileUploadService } from '@features/shared/file-upload/file-upload.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private fileUploadService: FileUploadService,
  ) {}

  async loginUser(user: LoginUserDto): Promise<any> {
    const condition = user.email
      ? { email: user.email }
      : { phone: user.phone };
    try {
      const userData = await (
        await this.userModel.findOne(condition)
      ).toObject({ getters: true });
      return userData;
    } catch (e) {
      throw new HttpException(
        { code: code.BAD_REQUEST, message: messages.INVALID_PASSWORD },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getUser(user_id: string) {
    try {
      const user = await this.userModel.findOne({ id: user_id });
      return user;
    } catch (e) {
      throw new HttpException(
        {
          statusCode: code.INTERNAL_SERVER_ERROR,
          message: messages.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async registerUser(userDetails: UserRegistration, file: FileDto) {
    try {
      const userExists = await this.userModel
        .findOne({
          $or: [{ email: userDetails.email }, { phone: userDetails.phone }],
        })
        .lean();

      if (userExists) {
        return {
          statusCode: code.CONFLICT,
          message: messages.EMAIL_PHONE_EXISTS,
          data: [],
        };
      }
      let fileResult;
      if (file) {
        fileResult = await this.fileUploadService.uploadS3(file);
      }

      userDetails.password = await bcrypt.hash(userDetails.password, 12);
      const createdUser = new this.userModel({
        ...userDetails,
        profileImageUrl: fileResult?.Location || '',
      });
      const user = await (await createdUser.save()).toObject({ getters: true });
      const response = plainToClass(UserRegistrationResponseDto, user);
      return {
        statusCode: code.SUCCESS,
        message: messages.SUCCESS,
        data: response,
      };
    } catch (e) {
      console.log(e);
      throw new HttpException(
        {
          statusCode: code.INTERNAL_SERVER_ERROR,
          message: messages.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
