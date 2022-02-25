import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { FileDto } from '../shared/dto/file.dto';

import { UserRegistration } from './dto/user-registration.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('/register')
  @UseInterceptors(FileInterceptor('file'))
  registerUser(@Body() body: UserRegistration, @UploadedFile() file: FileDto) {
    return this.service.registerUser(body, file);
  }

  @Get('/:id')
  @UseGuards(AuthGuard('jwt'))
  getSingleUser(@Param('id') id: string) {
    return this.service.getUser(id);
  }
}
