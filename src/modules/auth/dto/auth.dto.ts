import { IsString, IsEmail } from "class-validator";
//import { ApiProperty } from '@nestjs/swagger'

export class AuthDto {
   /*  @ApiProperty({
        description: 'Email do usuário',
        type: String,
        default: 'marcos@mail.com',
      }) */
    @IsEmail()
    email: string

    /* @ApiProperty({
        description: 'Senha do usuário',
        type: String,
        default: '1z34S678',
      }) */
    @IsString()
    password:string
}