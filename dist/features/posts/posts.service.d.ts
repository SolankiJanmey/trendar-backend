import { FileDto } from '@features/shared/dto/file.dto';
import { FileUploadService } from '@features/shared/file-upload/file-upload.service';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/post-create.dto';
import { Posts } from './posts.schema';
export declare class PostsService {
    private readonly postModel;
    private fileUploadService;
    constructor(postModel: Model<Posts>, fileUploadService: FileUploadService);
    createNewPost(postData: CreatePostDto, file: FileDto): Promise<{
        statusCode: number;
        message: string;
        data: Posts & {
            _id: any;
        };
    }>;
}
