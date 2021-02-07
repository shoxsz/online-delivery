import { Expose, Type } from "class-transformer";
import { IsArray, IsEmail, IsObject, IsOptional, IsString, MaxLength, ValidateNested } from "class-validator";

export class CreatePizzaDetailsVal {

    @IsString()
    @MaxLength(100)
    @Expose()
    flavor1Id: string;

    @IsString()
    @MaxLength(100)
    @IsOptional()
    @Expose()
    flavor2Id?: string;

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
    firstName: string;

    @IsString()
    @MaxLength(100)
    @Expose()
    lastName: string;
    
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
    clientData: CreateOrderCostumerVal;

    @ValidateNested()
    @IsArray()
    @Type(() => CreateOrderProductVal)
    @Expose()
    products: CreateOrderProductVal[];

    @IsString()
    @Expose()
    returnUrl: string;

}