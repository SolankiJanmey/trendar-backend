import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { FileDto } from '../dto/file.dto';

@Injectable()
export class FileUploadService {
  /**
   *
   * @param file - file buffer
   * Upload image in S3
   */
  async uploadS3(file: FileDto) {
    const name = `${file.originalname}`;
    const bucket = process.env.AWS_S3_BUCKET_NAME;
    const s3 = this.getS3();
    const params = {
      Bucket: bucket,
      Key: `${Date.now().toString()}/${name}`,
      Body: file.buffer,
    };
    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          console.log('err', err);
          reject(err.message);
        }
        resolve(data);
      });
    });
  }

  /**
   * Get image from S3
   */
  private getS3() {
    return new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }
}
