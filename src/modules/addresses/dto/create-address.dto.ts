import { IsNotEmpty, IsNumber, IsString, Length, MaxLength } from "class-validator";

export class CreateAddressDto {
    @IsString()
    @IsNotEmpty()
    @Length(8)
    zip_code: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    state: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    city: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    street: string;

    @IsNumber()
    @IsNotEmpty()
    number: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    image_5: string;
}
