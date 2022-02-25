import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { SharedModule } from '@features/shared/shared.module';
import { FileUploadService } from '@features/shared/file-upload/file-upload.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    SharedModule,
  ],
  providers: [UserService, FileUploadService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
