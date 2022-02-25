import { code } from '@common/response/error-codes';
import { messages } from '@common/response/messages';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(userId: string): Promise<any> {
    const user = await this.authService.validateUser(userId);

    if (!user) {
      throw new HttpException(
        { code: code.UNAUTHORIZED, message: messages.UNAUTHORIZED },
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }
}
