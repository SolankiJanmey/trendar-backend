import { BedroomEnum } from '@common/enums/bedrooms.enum';
import { BathroomEnum } from '@common/enums/bathroom.enum';
import { AgreementEnum } from '@common/enums/agreement.enum';
import { ParkingLotsEnum } from '@common/enums/parking-lot.enum';
export declare class CreatePostDto {
    title: string;
    description: string;
    bedroom: BedroomEnum;
    pets: string;
    aminities: string;
    bathroom: BathroomEnum;
    date: Date;
    furnished: boolean;
    agreement: AgreementEnum;
    price: number;
    loundry: boolean;
    utilities_include: string;
    parking: ParkingLotsEnum;
    property_location: string;
}
