import { Injectable } from '@nestjs/common';
import { TwilioModuleOptions, TwilioOptionsFactory } from 'nestjs-twilio';

@Injectable()
export class TwilioConfig implements TwilioOptionsFactory {
  createTwilioOptions(): TwilioModuleOptions {
    return {
      accountSid: process.env.TWILIO_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
    };
  }
}
