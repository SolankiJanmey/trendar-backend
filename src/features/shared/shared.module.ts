import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload/file-upload.service';

@Module({})
export class SharedModule {
  exports: [FileUploadService];
  providers: [FileUploadService];
}
