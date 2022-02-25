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
exports.PostsService = void 0;
const error_codes_1 = require("../../common/response/error-codes");
const messages_1 = require("../../common/response/messages");
const file_upload_service_1 = require("../shared/file-upload/file-upload.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const posts_schema_1 = require("./posts.schema");
let PostsService = class PostsService {
    constructor(postModel, fileUploadService) {
        this.postModel = postModel;
        this.fileUploadService = fileUploadService;
    }
    async createNewPost(postData, file) {
        try {
            let fileResult;
            if (file) {
                fileResult = await this.fileUploadService.uploadS3(file);
            }
            const data = Object.assign(Object.assign({}, postData), { property_location: JSON.parse(postData.property_location), imageUrl: (fileResult === null || fileResult === void 0 ? void 0 : fileResult.Location) || '', pets: postData.pets ? JSON.parse(postData.pets) : null, utilities_include: postData.utilities_include
                    ? JSON.parse(postData.utilities_include)
                    : null, aminities: postData.aminities ? JSON.parse(postData.aminities) : null });
            const post = new this.postModel(data);
            const response = await post.save();
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
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(posts_schema_1.Posts.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        file_upload_service_1.FileUploadService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map