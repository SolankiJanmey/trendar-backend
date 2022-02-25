import { FileDto } from '@features/shared/dto/file.dto';
import { CreatePostDto } from './dto/post-create.dto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private service;
    constructor(service: PostsService);
    createNewPost(body: CreatePostDto, file: FileDto): Promise<{
        statusCode: number;
        message: string;
        data: import("./posts.schema").Posts & {
            _id: any;
        };
    }>;
}
