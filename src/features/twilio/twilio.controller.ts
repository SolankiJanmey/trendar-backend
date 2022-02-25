import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CheckToken } from './dto/check-token.dto';
import { SendVeficationCode } from './dto/send-verification-code.dto';
import { TwilioService } from './twilio.service';

@ApiTags('otp')
@Controller('otp')
export class TwilioController {
  constructor(private twilioService: TwilioService) {}

  @Post('/request')
  sendVerificationToken(@Body() body: SendVeficationCode) {
    return this.twilioService.createToken(body);
  }

  @Post('/verify')
  checkVerificationToken(@Body() requestData: CheckToken) {
    return this.twilioService.checkVerificationToken(requestData);
  }
}
