import { FileDto } from '../dto/file.dto';
export declare class FileUploadService {
    uploadS3(file: FileDto): Promise<unknown>;
    private getS3;
}
