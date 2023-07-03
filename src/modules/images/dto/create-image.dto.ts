import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateImageDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cover: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    image_1: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    image_2: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    image_3: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    image_4: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    image_5: string;
}
