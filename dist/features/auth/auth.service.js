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
exports.AuthService = void 0;
const error_codes_1 = require("../../common/response/error-codes");
const messages_1 = require("../../common/response/messages");
const user_registration_dto_1 = require("../user/dto/user-registration.dto");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const class_transformer_1 = require("class-transformer");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async login(loginUser) {
        const userData = await this.userService.loginUser(loginUser);
        if (!userData) {
            throw new common_1.HttpException({ code: error_codes_1.code.UNAUTHORIZED, message: messages_1.messages.USER_NOT_FOUND }, common_1.HttpStatus.UNAUTHORIZED);
        }
        const isPasswordMatching = await bcrypt.compare(loginUser.password, userData.password);
        if (!isPasswordMatching) {
            throw new common_1.HttpException({ code: error_codes_1.code.BAD_REQUEST, message: messages_1.messages.INVALID_PASSWORD }, common_1.HttpStatus.BAD_REQUEST);
        }
        const response = (0, class_transformer_1.plainToClass)(user_registration_dto_1.UserRegistrationResponseDto, userData);
        const token = this._createToken(response._id, response.userType);
        return {
            statusCode: error_codes_1.code.SUCCESS,
            message: messages_1.messages.SUCCESS,
            data: response,
            accessToken: token.accessToken,
        };
    }
    _createToken(user_id, type) {
        const user = { id: user_id, type };
        const accessToken = this.jwtService.sign(user);
        return {
            accessToken,
        };
    }
    async validateUser(userId) {
        const user = await this.userService.getUser(userId);
        if (!user) {
            throw new common_1.HttpException({
                code: error_codes_1.code.UNAUTHORIZED,
                message: messages_1.messages.UNAUTHORIZED,
            }, common_1.HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map