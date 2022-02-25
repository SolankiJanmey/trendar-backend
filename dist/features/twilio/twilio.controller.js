"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const check_token_dto_1 = require("./dto/check-token.dto");
const send_verification_code_dto_1 = require("./dto/send-verification-code.dto");
const twilio_service_1 = require("./twilio.service");
let TwilioController = class TwilioController {
    constructor(twilioService) {
        this.twilioService = twilioService;
    }
    sendVerificationToken(body) {
        return this.twilioService.createToken(body);
    }
    checkVerificationToken(requestData) {
        return this.twilioService.checkVerificationToken(requestData);
    }
};
__decorate([
    (0, common_1.Post)('/request'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_verification_code_dto_1.SendVeficationCode]),
    __metadata("design:returntype", void 0)
], TwilioController.prototype, "sendVerificationToken", null);
__decorate([
    (0, common_1.Post)('/verify'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_token_dto_1.CheckToken]),
    __metadata("design:returntype", void 0)
], TwilioController.prototype, "checkVerificationToken", null);
TwilioController = __decorate([
    (0, swagger_1.ApiTags)('otp'),
    (0, common_1.Controller)('otp'),
    __metadata("design:paramtypes", [twilio_service_1.TwilioService])
], TwilioController);
exports.TwilioController = TwilioController;
//# sourceMappingURL=twilio.controller.js.map