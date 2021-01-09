import { BaseEntity } from "./BaseEntity";
import { Validation } from "./Validation";

export class UserAddress extends BaseEntity {

    zipCode: string;
    country: string;
    state: string;
    street: string;
    neighborhood: string;
    number: number;
    complement: string;

    constructor(address?: Partial<UserAddress>) {
        super(address);
        Object.assign(this, address);
    }

}

export class UserPhone extends BaseEntity {

    countryCode: number;
    areaCode: number;
    number: string;

    constructor(phone?: Partial<UserPhone>) {
        super(phone);
        Object.assign(this, phone);
    }
}

export class User extends BaseEntity {

    name: string;
    email: string;

    password: string;
    passwordSalt: string;

    birthdate: Date;
    phone: UserPhone[];
    address: UserAddress[];

    validations: Validation[];

    constructor(user?: Partial<User>) {
        super(user);
        Object.assign(this, user);
    }

}