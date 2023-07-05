import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get(':id/ads')
  findAds(@Param('id') id: string) {
    return this.usersService.findAds(id);
  }

  @Patch('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(req.user.id, updateUserDto);
  }

  @HttpCode(204)
  @Delete('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Request() req) {
    return this.usersService.remove(req.user.id);
  }

  @HttpCode(200)
  @Post('resetPassword')
  async sendEmailResetPassword(@Body('email') email: string) {
    await this.usersService.sendEmailResetPassword(email);
    return { message: 'token sent' };
  }

  @Patch('resetPassword/:reset_token')
  async resetPassword(
    @Param('reset_token') reset_token: string,
    @Body('password') password: string,
  ) {
    await this.usersService.resetPassword(password, reset_token);
    return { message: 'Password successfully updated!' };
  }
}
