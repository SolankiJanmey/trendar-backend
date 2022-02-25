import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { BedroomEnum } from '@common/enums/bedrooms.enum';
import { PetsEnum } from '@common/enums/pets.enum';
import { AmenitiesEnum } from '@common/enums/amenities.enum';
import { BathroomEnum } from '@common/enums/bathroom.enum';
import { AgreementEnum } from '@common/enums/agreement.enum';
import { UtilitesEnum } from '@common/enums/utilities.enum';
import { ParkingLotsEnum } from '@common/enums/parking-lot.enum';
import { PropertyAddressType } from '@common/interfaces/property_address.interface';

@Schema()
export class Posts extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  imageUrl: string;

  @Prop({ enum: BedroomEnum, required: false })
  bedroom: BedroomEnum;

  @Prop({ enum: PetsEnum, type: [String], required: false })
  pets: PetsEnum[];

  @Prop({ enum: AmenitiesEnum, type: [String], required: true })
  aminities: AmenitiesEnum[];

  @Prop({ enum: BathroomEnum, required: false })
  bathroom: BathroomEnum;

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: Boolean, required: false })
  furnished: boolean;

  @Prop({ enum: AgreementEnum, required: false })
  agreement: AgreementEnum;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Boolean, required: false })
  loundry: boolean;

  @Prop({ enum: UtilitesEnum, type: [String], required: false })
  utilities_include: UtilitesEnum[];

  @Prop({ enum: ParkingLotsEnum, required: false })
  parking: ParkingLotsEnum;

  @Prop({ required: true, type: {}, index: '2dsphere', sparse: true })
  property_location: PropertyAddressType;

  @Prop({ type: Date, required: true, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, required: true, default: Date.now })
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Posts);
