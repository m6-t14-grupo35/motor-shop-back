import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Length, MaxLength } from "class-validator";

export class CreateAddressDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(8)
    zip_code: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    state: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    city: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    street: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    number: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    complement: string;
}
