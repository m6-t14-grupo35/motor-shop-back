import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class ResetTokenDto {
    @IsString()
    resetToken: string;
  }