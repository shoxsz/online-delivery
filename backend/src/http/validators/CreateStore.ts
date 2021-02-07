import { Expose } from "class-transformer";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateStoreVal {
    
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    @Expose()
    name: string;

    @IsString()
    @MinLength(1)
    @MaxLength(1000)
    @Expose()
    description: string;
    
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    @Expose()
    cover: string;

    @IsString()
    @MinLength(1)
    @MaxLength(100)
    @Expose()
    logo: string;

}