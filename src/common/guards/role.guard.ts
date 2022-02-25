import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { RolesEnum } from '@common/enums/roles.enum';
import { ROLES_KEY } from '@common/decorators/roles.decorator';
import { code } from '@common/response/error-codes';
import { messages } from '@common/response/messages';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<RolesEnum[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    // console.log(requiredRoles);
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    if (request.user) {
      return this.matchRoles(requiredRoles, request.user?.userType);
    } else {
      throw new HttpException(
        {
          code: code.UNAUTHORIZED,
          message: messages.UNAUTHORIZED,
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  /**
   * @function matchRoles() match current user role
   * @param roles - user roles array
   * @param userRole - current user role
   */
  matchRoles(roles: any[], userRole: string): boolean {
    const result = roles.includes(userRole);
    // console.log(result);
    if (result) {
      return true;
    }
    throw new HttpException(
      {
        statusCode: 403,
        message: 'Forbidden',
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
