import { Expose, Type } from "class-transformer";
import { IsArray, IsDate, IsEmail, IsIn, IsNumber, isNumber, IsNumberString, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";

export class CreateUserAddressVal {

    @MinLength(8)
    @MaxLength(8)
    @Expose()
    zipCode: string;

    @MinLength(2)
    @MaxLength(2)
    @Expose()
    country: string;

    @MinLength(2)
    @MaxLength(2)
    state: string;

    @MinLength(1)
    @MaxLength(100)
    @Expose()
    street: string;

    @MinLength(1)
    @MaxLength(100)
    @Expose()
    neighborhood: string;

    @IsNumber()
    @Expose()
    number: number;

    @MinLength(1)
    @MaxLength(1000)
    @Expose()
    complement?: string;

}

export class CreateUserPhoneVal {

    @IsIn([55])
    @Expose()
    countryCode: number;

    @IsIn([38])
    @Expose()
    areaCode: number;

    @IsNumberString()
    @MaxLength(15)
    @Expose()
    number: string;

}

export class CreateUserVal {

    @MinLength(1)
    @MaxLength(30)
    @Expose()
    name: string;

    @IsEmail()
    @MaxLength(30)
    @Expose()
    email: string;

    @MinLength(1)
    @MaxLength(30)
    @Expose()
    password: string;

    @ValidateNested({ each: true })
    @Type(() => CreateUserAddressVal)
    @IsArray()
    @Expose()
    address: CreateUserAddressVal[];

    @ValidateNested({ each: true })
    @Type(() => CreateUserPhoneVal)
    @IsArray()
    @Expose()
    phone: CreateUserPhoneVal[];

    @IsDate()
    @Expose()
    birthdate: Date;

}