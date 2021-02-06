import { Expose, Type } from "class-transformer";
import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class StoreSearchVal {

    @IsString()
    @MinLength(1)
    @MaxLength(100)
    @Expose()
    name: string;

    @IsNumber()
    @Type(() => Number)
    @Expose()
    page: number;

    @IsNumber()
    @Type(() => Number)
    @Expose()
    perPage: number;
}