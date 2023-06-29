import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

enum FuelTypes {
  GASOLINA = 'Gasolina',
  ETANOL = 'Etanol',
  DIESEL = 'Diesel',
  GLP = 'GLP',
  HYBRID = 'Hybrid',
  ELECTRIC = 'Electric',
}
export class CreateAdDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  brand: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  model: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  year: number;

  @ApiProperty()
  @IsEnum(FuelTypes)
  @IsNotEmpty()
  fuel: string /* | FuelTypes */;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  km: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  color: string;

  @ApiProperty()
  @IsNumber() //@IsDecimal
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  priceFIPE: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  is_sold: boolean;
}
