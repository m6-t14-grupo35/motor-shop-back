import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateImageDto {
    //@IsUrl()
    @IsString()
    @IsNotEmpty()
    cover: string;

    @IsString()
    @IsNotEmpty()
    image_1: string;

    @IsString()
    @IsNotEmpty()
    image_2: string;

    @IsString()
    @IsNotEmpty()
    image_3: string;

    @IsString()
    @IsNotEmpty()
    image_4: string;

    @IsString()
    @IsNotEmpty()
    image_5: string;
}
