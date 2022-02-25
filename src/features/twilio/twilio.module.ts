import { Module } from '@nestjs/common';
import { TwilioModule } from 'nestjs-twilio';

import { TwilioService } from './twilio.service';
import { TwilioController } from './twilio.controller';
import { TwilioConfig } from '@common/configs/twilio-config.service';

@Module({
  imports: [
    TwilioModule.forRootAsync({
      useClass: TwilioConfig,
    }),
  ],
  providers: [TwilioService],
  controllers: [TwilioController],
})
export class TwilioLocalModule {}
