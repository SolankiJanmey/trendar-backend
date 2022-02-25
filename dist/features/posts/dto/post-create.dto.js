"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const bedrooms_enum_1 = require("../../../common/enums/bedrooms.enum");
const pets_enum_1 = require("../../../common/enums/pets.enum");
const amenities_enum_1 = require("../../../common/enums/amenities.enum");
const bathroom_enum_1 = require("../../../common/enums/bathroom.enum");
const agreement_enum_1 = require("../../../common/enums/agreement.enum");
const utilities_enum_1 = require("../../../common/enums/utilities.enum");
const parking_lot_enum_1 = require("../../../common/enums/parking-lot.enum");
const property_address_dto_1 = require("./property_address.dto");
class CreatePostDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'This is a property title' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 'This is a property description' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [bedrooms_enum_1.BedroomEnum],
        enum: [bedrooms_enum_1.BedroomEnum],
        default: bedrooms_enum_1.BedroomEnum.FOUR,
        enumName: 'BedroomEnum',
    }),
    (0, class_validator_1.IsEnum)(bedrooms_enum_1.BedroomEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "bedroom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [pets_enum_1.PetsEnum],
        enum: [pets_enum_1.PetsEnum],
        default: [pets_enum_1.PetsEnum.CAT, pets_enum_1.PetsEnum.OTHER],
        enumName: 'PetsEnum',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "pets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [amenities_enum_1.AmenitiesEnum],
        enum: [amenities_enum_1.AmenitiesEnum],
        default: [amenities_enum_1.AmenitiesEnum.AIR_CONDITIONING, amenities_enum_1.AmenitiesEnum.BALCONY],
        enumName: 'AmenitiesEnum',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "aminities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [bathroom_enum_1.BathroomEnum],
        enum: [bathroom_enum_1.BathroomEnum],
        default: bathroom_enum_1.BathroomEnum.FOUR,
        enumName: 'BathroomEnum',
    }),
    (0, class_validator_1.IsEnum)(bathroom_enum_1.BathroomEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "bathroom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: new Date() }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreatePostDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreatePostDto.prototype, "furnished", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [agreement_enum_1.AgreementEnum],
        enum: [agreement_enum_1.AgreementEnum],
        default: agreement_enum_1.AgreementEnum.LEASE,
        enumName: 'AgreementEnum',
    }),
    (0, class_validator_1.IsEnum)(agreement_enum_1.AgreementEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "agreement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: 100.0 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], CreatePostDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreatePostDto.prototype, "loundry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [utilities_enum_1.UtilitesEnum],
        enum: [utilities_enum_1.UtilitesEnum],
        default: [utilities_enum_1.UtilitesEnum.HEATING],
        enumName: 'UtilitesEnum',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "utilities_include", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: [parking_lot_enum_1.ParkingLotsEnum],
        default: parking_lot_enum_1.ParkingLotsEnum.FOUR,
        enum: [parking_lot_enum_1.ParkingLotsEnum],
        enumName: 'ParkingLotsEnum',
    }),
    (0, class_validator_1.IsEnum)(parking_lot_enum_1.ParkingLotsEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "parking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, type: property_address_dto_1.PropertyAddressDto }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDto.prototype, "property_location", void 0);
exports.CreatePostDto = CreatePostDto;
//# sourceMappingURL=post-create.dto.js.map