import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({
    description: 'User email',
    type: String,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password',
    type: String,
  })
  @IsString()
  password: string;
}
