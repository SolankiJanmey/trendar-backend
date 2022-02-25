import { code } from '@common/response/error-codes';
import { messages } from '@common/response/messages';
import { User } from '@features/user/user.schema';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
// import { AuthPlayloadDto } from '../auth/dto/payload.dto';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secrete_key',
    });
  }

  async validate(paylpad: any): Promise<User> {
    const user = await this.authService.validateUser(paylpad.id);

    if (!user) {
      throw new HttpException(
        { code: code.UNAUTHORIZED, message: messages.UNAUTHORIZED },
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }
}
