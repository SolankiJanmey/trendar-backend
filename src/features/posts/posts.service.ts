/* eslint-disable @typescript-eslint/no-empty-function */
import { code } from '@common/response/error-codes';
import { messages } from '@common/response/messages';
import { FileDto } from '@features/shared/dto/file.dto';
import { FileUploadService } from '@features/shared/file-upload/file-upload.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/post-create.dto';
import { Posts } from './posts.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name) private readonly postModel: Model<Posts>,
    private fileUploadService: FileUploadService,
  ) {}

  async createNewPost(postData: CreatePostDto, file: FileDto) {
    try {
      let fileResult;
      if (file) {
        fileResult = await this.fileUploadService.uploadS3(file);
      }
      const data = {
        ...postData,
        property_location: JSON.parse(postData.property_location),
        imageUrl: fileResult?.Location || '',
        pets: postData.pets ? JSON.parse(postData.pets) : null,
        utilities_include: postData.utilities_include
          ? JSON.parse(postData.utilities_include)
          : null,
        aminities: postData.aminities ? JSON.parse(postData.aminities) : null,
      };
      const post = new this.postModel(data);
      const response = await post.save();
      return {
        statusCode: code.SUCCESS,
        message: messages.SUCCESS,
        data: response,
      };
    } catch (e) {
      console.log(e);
      throw new HttpException(
        {
          statusCode: code.INTERNAL_SERVER_ERROR,
          message: messages.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
