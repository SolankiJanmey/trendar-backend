import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { UserTypeEnum } from '@common/enums/user-type.enum';

export class UserRegistration {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userType: string;

  @ApiProperty()
  @IsOptional()
  birthDate?: Date;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsOptional()
  // @IsPhoneNumber('CA' || 'IN')
  phone?: string;
}

export class UserRegistrationResponseDto {
  @ApiProperty({ type: String })
  _id: string;

  @ApiProperty({ type: String })
  firstName: string;

  @ApiProperty({ type: String })
  lastName: string;

  @ApiProperty({ type: String })
  @Exclude()
  password: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  profileImage: string;

  @ApiProperty({ type: String })
  birthDate: string;

  @ApiProperty({ type: String })
  phone: string;

  @ApiProperty({ type: UserTypeEnum })
  userType: UserTypeEnum;

  @Exclude()
  __v: number;

  @Exclude()
  id: string;
}
