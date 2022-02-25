import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FileUploadResponse {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Location: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  ETag: string;

  @ApiProperty({ required: true, description: 'Buffer of file' })
  @IsString()
  @IsNotEmpty()
  Bucket: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  Key: string;
}
