export type CreateUserAddress = {
    
    zipCode: string;
    country: string;
    state: string;
    street: string;
    neighborhood: string;
    number: number;
    complement?: string;

}

export type CreateUserPhone = {

    countryCode: number;
    areaCode: number;
    number: string;

}

export type CreateUser = {

    name: string;
    email: string;
    password: string;
    address: CreateUserAddress[];
    phone: CreateUserPhone[];
    birthdate: Date;

}