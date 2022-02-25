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
exports.PostSchema = exports.Posts = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bedrooms_enum_1 = require("../../common/enums/bedrooms.enum");
const pets_enum_1 = require("../../common/enums/pets.enum");
const amenities_enum_1 = require("../../common/enums/amenities.enum");
const bathroom_enum_1 = require("../../common/enums/bathroom.enum");
const agreement_enum_1 = require("../../common/enums/agreement.enum");
const utilities_enum_1 = require("../../common/enums/utilities.enum");
const parking_lot_enum_1 = require("../../common/enums/parking-lot.enum");
const property_address_interface_1 = require("../../common/interfaces/property_address.interface");
let Posts = class Posts extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Posts.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Posts.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Posts.prototype, "imageUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: bedrooms_enum_1.BedroomEnum, required: false }),
    __metadata("design:type", String)
], Posts.prototype, "bedroom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: pets_enum_1.PetsEnum, type: [String], required: false }),
    __metadata("design:type", Array)
], Posts.prototype, "pets", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: amenities_enum_1.AmenitiesEnum, type: [String], required: true }),
    __metadata("design:type", Array)
], Posts.prototype, "aminities", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: bathroom_enum_1.BathroomEnum, required: false }),
    __metadata("design:type", String)
], Posts.prototype, "bathroom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], Posts.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: false }),
    __metadata("design:type", Boolean)
], Posts.prototype, "furnished", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: agreement_enum_1.AgreementEnum, required: false }),
    __metadata("design:type", String)
], Posts.prototype, "agreement", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Posts.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: false }),
    __metadata("design:type", Boolean)
], Posts.prototype, "loundry", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: utilities_enum_1.UtilitesEnum, type: [String], required: false }),
    __metadata("design:type", Array)
], Posts.prototype, "utilities_include", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: parking_lot_enum_1.ParkingLotsEnum, required: false }),
    __metadata("design:type", String)
], Posts.prototype, "parking", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: {}, index: '2dsphere', sparse: true }),
    __metadata("design:type", property_address_interface_1.PropertyAddressType)
], Posts.prototype, "property_location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true, default: Date.now }),
    __metadata("design:type", Date)
], Posts.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true, default: Date.now }),
    __metadata("design:type", Date)
], Posts.prototype, "updatedAt", void 0);
Posts = __decorate([
    (0, mongoose_1.Schema)()
], Posts);
exports.Posts = Posts;
exports.PostSchema = mongoose_1.SchemaFactory.createForClass(Posts);
//# sourceMappingURL=posts.schema.js.map