import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class ResetTokenDto {
    @IsString()
    reset_token: string;
  }