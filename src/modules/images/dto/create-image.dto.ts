import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateImageDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cover: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    image_1: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    image_2: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    image_3: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    image_4: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    image_5: string;
}
