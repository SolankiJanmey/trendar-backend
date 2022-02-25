import { Roles } from '@common/decorators/roles.decorator';
import { RolesEnum } from '@common/enums/roles.enum';
import { RolesGuard } from '@common/guards/role.guard';
import { FileDto } from '@features/shared/dto/file.dto';
import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/post-create.dto';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private service: PostsService) {}

  @Post('/create')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RolesEnum.LANDLORD)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  createNewPost(@Body() body: CreatePostDto, @UploadedFile() file: FileDto) {
    return this.service.createNewPost(body, file);
  }
}
