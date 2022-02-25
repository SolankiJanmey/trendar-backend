"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioLocalModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_twilio_1 = require("nestjs-twilio");
const twilio_service_1 = require("./twilio.service");
const twilio_controller_1 = require("./twilio.controller");
const twilio_config_service_1 = require("../../common/configs/twilio-config.service");
let TwilioLocalModule = class TwilioLocalModule {
};
TwilioLocalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_twilio_1.TwilioModule.forRootAsync({
                useClass: twilio_config_service_1.TwilioConfig,
            }),
        ],
        providers: [twilio_service_1.TwilioService],
        controllers: [twilio_controller_1.TwilioController],
    })
], TwilioLocalModule);
exports.TwilioLocalModule = TwilioLocalModule;
//# sourceMappingURL=twilio.module.js.map