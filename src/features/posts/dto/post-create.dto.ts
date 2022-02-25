import {
  IsBoolean,
  IsDate,
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { BedroomEnum } from '@common/enums/bedrooms.enum';
import { PetsEnum } from '@common/enums/pets.enum';
import { AmenitiesEnum } from '@common/enums/amenities.enum';
import { BathroomEnum } from '@common/enums/bathroom.enum';
import { AgreementEnum } from '@common/enums/agreement.enum';
import { UtilitesEnum } from '@common/enums/utilities.enum';
import { ParkingLotsEnum } from '@common/enums/parking-lot.enum';
import { PropertyAddressDto } from './property_address.dto';

export class CreatePostDto {
  @ApiProperty({ required: true, default: 'This is a property title' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: true, default: 'This is a property description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    required: false,
    type: [BedroomEnum],
    enum: [BedroomEnum],
    default: BedroomEnum.FOUR,
    enumName: 'BedroomEnum',
  })
  @IsEnum(BedroomEnum)
  @IsOptional()
  bedroom: BedroomEnum;

  @ApiProperty({
    required: false,
    type: [PetsEnum],
    enum: [PetsEnum],
    default: [PetsEnum.CAT, PetsEnum.OTHER],
    enumName: 'PetsEnum',
  })
  // @IsEnum(PetsEnum)
  @IsOptional()
  pets: string;

  @ApiProperty({
    required: false,
    type: [AmenitiesEnum],
    enum: [AmenitiesEnum],
    default: [AmenitiesEnum.AIR_CONDITIONING, AmenitiesEnum.BALCONY],
    enumName: 'AmenitiesEnum',
  })
  @IsOptional()
  aminities: string;

  @ApiProperty({
    required: false,
    type: [BathroomEnum],
    enum: [BathroomEnum],
    default: BathroomEnum.FOUR,
    enumName: 'BathroomEnum',
  })
  @IsEnum(BathroomEnum)
  @IsOptional()
  bathroom: BathroomEnum;

  @ApiProperty({ required: true, default: new Date() })
  @IsNotEmpty()
  date: Date;

  @ApiProperty({ required: false, default: false })
  @IsBoolean()
  @IsOptional()
  furnished: boolean;

  @ApiProperty({
    required: false,
    type: [AgreementEnum],
    enum: [AgreementEnum],
    default: AgreementEnum.LEASE,
    enumName: 'AgreementEnum',
  })
  @IsEnum(AgreementEnum)
  @IsOptional()
  agreement: AgreementEnum;

  @ApiProperty({ required: true, default: 100.0 })
  @IsNotEmpty()
  @IsDecimal()
  price: number;

  @ApiProperty({ required: false, default: false })
  @IsBoolean()
  @IsOptional()
  loundry: boolean;

  @ApiProperty({
    required: false,
    type: [UtilitesEnum],
    enum: [UtilitesEnum],
    default: [UtilitesEnum.HEATING],
    enumName: 'UtilitesEnum',
  })
  @IsOptional()
  utilities_include: string;

  @ApiProperty({
    required: false,
    type: [ParkingLotsEnum],
    default: ParkingLotsEnum.FOUR,
    enum: [ParkingLotsEnum],
    enumName: 'ParkingLotsEnum',
  })
  @IsEnum(ParkingLotsEnum)
  @IsOptional()
  parking: ParkingLotsEnum;

  @ApiProperty({ required: true, type: PropertyAddressDto })
  @IsNotEmpty()
  property_location: string;
}
