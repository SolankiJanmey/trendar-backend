import { CheckToken } from './dto/check-token.dto';
import { SendVeficationCode } from './dto/send-verification-code.dto';
import { TwilioService } from './twilio.service';
export declare class TwilioController {
    private twilioService;
    constructor(twilioService: TwilioService);
    sendVerificationToken(body: SendVeficationCode): Promise<{
        message: string;
        success: boolean;
    }>;
    checkVerificationToken(requestData: CheckToken): Promise<{
        message: string;
        success: boolean;
    }>;
}
