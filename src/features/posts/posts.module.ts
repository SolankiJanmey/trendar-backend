import { FileUploadService } from '@features/shared/file-upload/file-upload.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { Posts, PostSchema } from './posts.schema';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  imports: [
    MongooseModule.forFeature([{ name: Posts.name, schema: PostSchema }]),
  ],
  providers: [PostsService, FileUploadService],
})
export class PostsModule {}
