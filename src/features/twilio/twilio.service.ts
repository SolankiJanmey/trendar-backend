import { Injectable } from '@nestjs/common';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
import { CheckToken } from './dto/check-token.dto';
import { SendVeficationCode } from './dto/send-verification-code.dto';

@Injectable()
export class TwilioService {
  constructor(@InjectTwilio() private client: TwilioClient) {}

  async createToken(body: SendVeficationCode) {
    try {
      await this.client.verify
        .services(process.env.TWILIO_SID)
        .verifications.create({ to: body.number, channel: 'sms' });
      return { message: 'Otp send successfully', success: true };
    } catch (e) {
      // console.log('>>>>>>>>>>', e);
      return { message: 'Failed to send otp', success: false };
    }
  }

  async checkVerificationToken(requestData: CheckToken) {
    try {
      await this.client.verify
        .services(process.env.TWILIO_SID)
        .verificationChecks.create({
          to: requestData.number,
          code: requestData.otpNumber,
        });
      return { message: 'Token has been verified', success: true };
    } catch (e) {
      return { message: 'Invalid verification code', success: false };
    }
  }
}
