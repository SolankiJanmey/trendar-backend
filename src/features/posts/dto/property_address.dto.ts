import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class PropertyAddressDto {
  @ApiProperty({ type: String, required: true, default: 'Points' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ type: [], required: true, default: [12.343, 23.4544] })
  @IsArray()
  @IsNotEmpty()
  coordinates: [number];

  @ApiProperty({
    type: String,
    required: true,
    default: 'Vastrapur lake, mansi circle road',
  })
  @IsString()
  @IsNotEmpty()
  address: string;
}
