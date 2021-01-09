import { Document } from "mongoose";
import { User, UserAddress, UserPhone } from "../../entities/User";
import { Validation } from "../../entities/Validation";
import { UserSchemaType } from "../UserSchema";
import { convertToEntity } from "./convert-to-entity";

export const convertUserToEntity = (found: UserSchemaType & Document) => {

    if(found.validations && found.validations.length) {
        found.validations = found.validations.map(validation => convertToEntity(Validation, validation));
    }

    if(found.phone && found.phone.length) {
        found.phone = found.phone.map(phone => convertToEntity(UserPhone, phone));
    }

    if(found.address && found.address.length) {
        found.address = found.address.map(address => convertToEntity(UserAddress, address));
    }

    return convertToEntity(User, found);

}