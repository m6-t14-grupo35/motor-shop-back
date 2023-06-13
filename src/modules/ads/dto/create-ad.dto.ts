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
import { defaultIfEmpty } from 'rxjs';

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
  @MaxLength(30)
  brand: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  model: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  year: string;

  @IsEnum(FuelTypes)
  @IsNotEmpty()
  fuel: string /* | FuelTypes */;

  @IsNumber()
  @IsNotEmpty()
  km: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  color: string;

  @IsNumber() //@IsDecimal
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsOptional()
  is_sold: boolean;

  /* @IsString()
  user_id: string; */
}
