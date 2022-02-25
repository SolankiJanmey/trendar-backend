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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const user_registration_dto_1 = require("./dto/user-registration.dto");
const error_codes_1 = require("../../common/response/error-codes");
const user_schema_1 = require("./user.schema");
const messages_1 = require("../../common/response/messages");
const class_transformer_1 = require("class-transformer");
const file_upload_service_1 = require("../shared/file-upload/file-upload.service");
let UserService = class UserService {
    constructor(userModel, fileUploadService) {
        this.userModel = userModel;
        this.fileUploadService = fileUploadService;
    }
    async loginUser(user) {
        const condition = user.email
            ? { email: user.email }
            : { phone: user.phone };
        try {
            const userData = await (await this.userModel.findOne(condition)).toObject({ getters: true });
            return userData;
        }
        catch (e) {
            throw new common_1.HttpException({ code: error_codes_1.code.BAD_REQUEST, message: messages_1.messages.INVALID_PASSWORD }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getUser(user_id) {
        try {
            const user = await this.userModel.findOne({ id: user_id });
            return user;
        }
        catch (e) {
            throw new common_1.HttpException({
                statusCode: error_codes_1.code.INTERNAL_SERVER_ERROR,
                message: messages_1.messages.INTERNAL_SERVER_ERROR,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async registerUser(userDetails, file) {
        try {
            const userExists = await this.userModel
                .findOne({
                $or: [{ email: userDetails.email }, { phone: userDetails.phone }],
            })
                .lean();
            if (userExists) {
                return {
                    statusCode: error_codes_1.code.CONFLICT,
                    message: messages_1.messages.EMAIL_PHONE_EXISTS,
                    data: [],
                };
            }
            let fileResult;
            if (file) {
                fileResult = await this.fileUploadService.uploadS3(file);
            }
            userDetails.password = await bcrypt.hash(userDetails.password, 12);
            const createdUser = new this.userModel(Object.assign(Object.assign({}, userDetails), { profileImageUrl: (fileResult === null || fileResult === void 0 ? void 0 : fileResult.Location) || '' }));
            const user = await (await createdUser.save()).toObject({ getters: true });
            const response = (0, class_transformer_1.plainToClass)(user_registration_dto_1.UserRegistrationResponseDto, user);
            return {
                statusCode: error_codes_1.code.SUCCESS,
                message: messages_1.messages.SUCCESS,
                data: response,
            };
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException({
                statusCode: error_codes_1.code.INTERNAL_SERVER_ERROR,
                message: messages_1.messages.INTERNAL_SERVER_ERROR,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        file_upload_service_1.FileUploadService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map