import { Expose, Type } from "class-transformer";
import { IsArray, IsEmail, IsEnum, IsObject, IsOptional, IsString, MaxLength, ValidateIf, ValidateNested } from "class-validator";
import { Gateways } from "../../core/types/Gateways";

export class CreatePizzaDetailsVal {

    @IsString()
    @MaxLength(100)
    @Expose()
    flavor1: string;

    @IsString()
    @MaxLength(100)
    @IsOptional()
    @Expose()
    flavor2?: string;

    @IsString()
    @MaxLength(100)
    @IsOptional()
    @Expose()
    border?: string;

    @IsString()
    @MaxLength(100)
    @Expose()
    tamanho: string;

}

export class CreateOrderProductVal {

    @IsString()
    @MaxLength(100)
    @Expose()
    storeId: string;
    
    @ValidateNested()
    @IsObject()
    @Type(() => CreatePizzaDetailsVal)
    @Expose()
    details: CreatePizzaDetailsVal;

}

export class CreateOrderCostumerVal {

    @IsString()
    @MaxLength(100)
    @Expose()
    name: string;
    
    @IsString()
    @MaxLength(100)
    @Expose()
    document: string;
    
    @IsEmail()
    @Expose()
    email: string;

    @IsString()
    @Expose()
    phone: string;

}

export class CreateOrderVal {

    @ValidateNested()
    @IsObject()
    @Type(() => CreateOrderCostumerVal)
    @Expose()
    costumerData: CreateOrderCostumerVal;

    @ValidateNested()
    @IsArray()
    @Type(() => CreateOrderProductVal)
    @Expose()
    products: CreateOrderProductVal[];

    @IsEnum(Gateways)
    @Expose()
    gateway: Gateways;

    @IsString()
    @MaxLength(1000)
    @ValidateIf((obj) => obj.gateway == Gateways.PAGSEGURO)
    @Expose()
    cardToken?: string;

    @IsString()
    @ValidateIf((obj) => obj.gateway == Gateways.PICPAY)
    @Expose()
    returnUrl?: string;

}