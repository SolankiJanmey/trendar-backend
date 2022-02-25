import { code } from '@common/response/error-codes';
import { messages } from '@common/response/messages';
import { UserRegistrationResponseDto } from '@features/user/dto/user-registration.dto';
import { User } from '@features/user/user.schema';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { plainToClass } from 'class-transformer';

import { UserService } from '../user/user.service';
import { LoginUserDto } from './dto/login.dto';
// import { AuthPlayloadDto } from './dto/payload.dto';

@Injectable()
export class AuthService {
  constructor(
    public jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(loginUser: LoginUserDto): Promise<any> {
    const userData = await this.userService.loginUser(loginUser);
    if (!userData) {
      throw new HttpException(
        { code: code.UNAUTHORIZED, message: messages.USER_NOT_FOUND },
        HttpStatus.UNAUTHORIZED,
      );
    }
    const isPasswordMatching = await bcrypt.compare(
      loginUser.password,
      userData.password,
    );
    if (!isPasswordMatching) {
      throw new HttpException(
        { code: code.BAD_REQUEST, message: messages.INVALID_PASSWORD },
        HttpStatus.BAD_REQUEST,
      );
    }
    const response = plainToClass(UserRegistrationResponseDto, userData);
    const token = this._createToken(response._id, response.userType);

    return {
      statusCode: code.SUCCESS,
      message: messages.SUCCESS,
      data: response,
      accessToken: token.accessToken,
    };
  }

  public _createToken(user_id: string, type: string): any {
    const user: any = { id: user_id, type };
    const accessToken = this.jwtService.sign(user);
    return {
      accessToken,
    };
  }

  async validateUser(userId: string): Promise<User> {
    const user = await this.userService.getUser(userId);

    if (!user) {
      throw new HttpException(
        {
          code: code.UNAUTHORIZED,
          message: messages.UNAUTHORIZED,
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    return user;
  }
}
