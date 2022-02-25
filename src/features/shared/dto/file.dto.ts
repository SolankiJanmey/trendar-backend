export interface FileDto extends Blob {
  readonly lastModified?: number;
  readonly name: string;
  readonly originalname: string;
  readonly buffer: Buffer;
}
