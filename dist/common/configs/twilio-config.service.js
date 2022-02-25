"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioConfig = void 0;
const common_1 = require("@nestjs/common");
let TwilioConfig = class TwilioConfig {
    createTwilioOptions() {
        return {
            accountSid: process.env.TWILIO_SID,
            authToken: process.env.TWILIO_AUTH_TOKEN,
        };
    }
};
TwilioConfig = __decorate([
    (0, common_1.Injectable)()
], TwilioConfig);
exports.TwilioConfig = TwilioConfig;
//# sourceMappingURL=twilio-config.service.js.map