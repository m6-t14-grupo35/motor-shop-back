import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ResetTokenDto {
  @ApiProperty()
  @IsString()
  reset_token: string;
}
