import { TwilioModuleOptions, TwilioOptionsFactory } from 'nestjs-twilio';
export declare class TwilioConfig implements TwilioOptionsFactory {
    createTwilioOptions(): TwilioModuleOptions;
}
