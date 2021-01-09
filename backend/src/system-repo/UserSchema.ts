import * as mongoose from "mongoose";
import { AuthToken } from "../entities/AuthToken";
import { Store } from "../entities/Store";
import { UserAddress, UserPhone } from "../entities/User";
import { Validation } from "../entities/Validation";
import { TokenSchema } from "./TokenSchema";
import { ValidationSchema } from "./ValidationSchema";

export type UserSchemaType = {
    
    _id: String,
    name: String,
    email: String,
    password: String,
    passwordSalt: String,
    birthdate: Date,
    
    phone: UserPhone[],
    address: UserAddress[],
    validations: Validation[],
    tokens: AuthToken[],
    stores: Store[],

    createdAt: Date,
    updatedAt: Date,
}

export const UserPhoneSchema = new mongoose.Schema({

    _id: String,
    countryCode: Number,
    areaCode: Number,
    number: String,
    createdAt: Date,
    updatedAt: Date

});

export const UserAddressSchema = new mongoose.Schema({

    _id: String,
    zipCode: String,
    country: String,
    state: String,
    street: String,
    neighborhood: String,
    number: Number,
    complement: String,
    createdAt: Date,
    updatedAt: Date

});

export const UserSchema = new mongoose.Schema({
    
    _id: String,
    name: String,
    email: String,
    password: String,
    passwordSalt: String,
    birthdate: Date,
    
    phone: [UserPhoneSchema],
    address: [UserAddressSchema],
    validations: [ValidationSchema],
    tokens: [TokenSchema],

    createdAt: Date,
    updatedAt: Date,
});

export const UserModel = mongoose.model<UserSchemaType & mongoose.Document>("UserModel", UserSchema);