import { TwilioClient } from 'nestjs-twilio';
import { CheckToken } from './dto/check-token.dto';
import { SendVeficationCode } from './dto/send-verification-code.dto';
export declare class TwilioService {
    private client;
    constructor(client: TwilioClient);
    createToken(body: SendVeficationCode): Promise<{
        message: string;
        success: boolean;
    }>;
    checkVerificationToken(requestData: CheckToken): Promise<{
        message: string;
        success: boolean;
    }>;
}
