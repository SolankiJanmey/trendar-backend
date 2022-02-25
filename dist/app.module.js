"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const core_1 = require("@nestjs/core");
const mongoose_config_service_1 = require("./common/configs/mongoose-config.service");
const auth_module_1 = require("./features/auth/auth.module");
const user_module_1 = require("./features/user/user.module");
const twilio_module_1 = require("./features/twilio/twilio.module");
const file_upload_service_1 = require("./features/shared/file-upload/file-upload.service");
const shared_module_1 = require("./features/shared/shared.module");
const posts_module_1 = require("./features/posts/posts.module");
const auth_guard_1 = require("./common/guards/auth-guard");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            mongoose_1.MongooseModule.forRootAsync({
                useClass: mongoose_config_service_1.MongooseConfigService,
            }),
            auth_module_1.AuthModule,
            twilio_module_1.TwilioLocalModule,
            user_module_1.UserModule,
            posts_module_1.PostsModule,
            shared_module_1.SharedModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.JwtAuthGuard,
            },
            file_upload_service_1.FileUploadService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map