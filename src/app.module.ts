import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';

import { MongooseConfigService } from '@common/configs/mongoose-config.service';
import { AuthModule } from '@features/auth/auth.module';
import { UserModule } from '@features/user/user.module';
import { TwilioLocalModule } from '@features/twilio/twilio.module';
import { RolesGuard } from '@common/guards/role.guard';
import { FileUploadService } from './features/shared/file-upload/file-upload.service';
import { SharedModule } from './features/shared/shared.module';
import { PostsModule } from '@features/posts/posts.module';
import { JwtAuthGuard } from '@common/guards/auth-guard';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    AuthModule,
    TwilioLocalModule,
    UserModule,
    PostsModule,
    SharedModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    FileUploadService,
  ],
})
export class AppModule {}
