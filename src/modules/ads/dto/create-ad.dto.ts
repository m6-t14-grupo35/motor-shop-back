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
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  brand: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  model: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

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

  @IsNumber()
  @IsNotEmpty()
  priceFIPE: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsOptional()
  is_sold: boolean;
}
