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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTStrategy = void 0;
const error_codes_1 = require("../../../common/response/error-codes");
const messages_1 = require("../../../common/response/messages");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const auth_service_1 = require("../auth.service");
let JWTStrategy = class JWTStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secrete_key',
        });
        this.authService = authService;
    }
    async validate(paylpad) {
        const user = await this.authService.validateUser(paylpad.id);
        if (!user) {
            throw new common_1.HttpException({ code: error_codes_1.code.UNAUTHORIZED, message: messages_1.messages.UNAUTHORIZED }, common_1.HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
};
JWTStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], JWTStrategy);
exports.JWTStrategy = JWTStrategy;
//# sourceMappingURL=jwt.strategy.js.map