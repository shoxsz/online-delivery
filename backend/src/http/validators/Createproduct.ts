import { Expose, Type } from "class-transformer";
import { IsArray, IsNumber, IsObject, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";

export class CreateProductIngredientVal {

    @IsString()
    @MinLength(1)
    @MaxLength(100)
    @Expose()
    name: string;

    @IsString()
    @MaxLength(1000)
    @Expose()
    description: string;

}

export class CreateProductVariationVal {

    @IsString()
    @MinLength(1)
    @MaxLength(100)
    @Expose()
    name: string;

    @IsString()
    @MaxLength(1000)
    @Expose()
    description: string;

    @IsNumber()
    @Type(() => Number)
    @Expose()
    price: number;

}

export class CreateProductVariationTypeVal {

    @IsArray()
    @ValidateNested()
    @Type(() => CreateProductVariationVal)
    @Expose()
    tamanho: CreateProductVariationVal[];

    [data: string]: CreateProductVariationVal[];

}

export class CreateProductVal {

    @IsString()
    @MinLength(1)
    @MaxLength(100)
    @Expose()
    name: string;

    @IsString()
    @MaxLength(1000)
    @Expose()
    description: string;

    @IsNumber()
    @Type(() => Number)
    @Expose()
    price: number;

    @IsArray()
    @ValidateNested()
    @Type(() => CreateProductIngredientVal)
    @Expose()
    ingredients: CreateProductIngredientVal[];

    @IsObject()
    @ValidateNested()
    @Type(() => CreateProductVariationTypeVal)
    @Expose()
    variations: CreateProductVariationTypeVal;
}