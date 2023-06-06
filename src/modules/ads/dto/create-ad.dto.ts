import {
  IsBoolean,
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

enum FuelTypes {
  GASOLINA = 'Gasolina',
  ETANOL = 'Etanol',
  DIESEL = 'Diesel',
  GLP = 'GLP',
  HYBRID = 'Hybrid',
  ELECTTRIC = 'Electric',
}
export class CreateAdDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsEnum(FuelTypes)
  @IsNotEmpty()
  fuel: string;

  @IsNumber()
  @IsNotEmpty()
  km: number;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsDecimal()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  is_sold: boolean; /* = false */

  @IsString()
  user_id: string;
}
