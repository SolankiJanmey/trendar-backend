import { Document } from 'mongoose';
import { BedroomEnum } from '@common/enums/bedrooms.enum';
import { PetsEnum } from '@common/enums/pets.enum';
import { AmenitiesEnum } from '@common/enums/amenities.enum';
import { BathroomEnum } from '@common/enums/bathroom.enum';
import { AgreementEnum } from '@common/enums/agreement.enum';
import { UtilitesEnum } from '@common/enums/utilities.enum';
import { ParkingLotsEnum } from '@common/enums/parking-lot.enum';
import { PropertyAddressType } from '@common/interfaces/property_address.interface';
export declare class Posts extends Document {
    title: string;
    description: string;
    imageUrl: string;
    bedroom: BedroomEnum;
    pets: PetsEnum[];
    aminities: AmenitiesEnum[];
    bathroom: BathroomEnum;
    date: Date;
    furnished: boolean;
    agreement: AgreementEnum;
    price: number;
    loundry: boolean;
    utilities_include: UtilitesEnum[];
    parking: ParkingLotsEnum;
    property_location: PropertyAddressType;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PostSchema: import("mongoose").Schema<Posts, import("mongoose").Model<Posts, any, any, any>, any>;
