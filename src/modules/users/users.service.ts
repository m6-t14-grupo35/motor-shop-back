import {
  ConflictException,
  HttpCode,
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { randomUUID } from 'crypto';
import { MailService } from 'src/utils/mail.service';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private mailService: MailService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const findUserEmail = await this.usersRepository.findByEmail(
      createUserDto.email,
    );
    if (findUserEmail) {
      throw new ConflictException('User already exists.');
    }
    const user = await this.usersRepository.create(createUserDto);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.findAll();
    return users;
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  async findAds(id: string) {
    return await this.usersRepository.findAds(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto, req_id: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    if (id != req_id) {
      throw new ForbiddenException(
        'Not allowed to update other users. You can patch just your own profile.',
      );
    }
    return await this.usersRepository.update(id, updateUserDto);
  }

  @HttpCode(204)
  async remove(id: string, req_id: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    if (id != req_id) {
      throw new ForbiddenException(
        'Not allowed to remove other users. You can delete just your own profile.',
      );
    }
    return await this.usersRepository.delete(id);
  }

  @HttpCode(200)
  async sendEmailResetPassword(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    const resetToken = randomUUID();

    await this.usersRepository.updateToken(email, resetToken);

    const resetPasswordTemplate = this.mailService.resetPasswordTemplate(
      email,
      user.name,
      resetToken,
    );
    await this.mailService.sendEmail(resetPasswordTemplate);
  }

  @HttpCode(200)
  async resetPassword(password: string, reset_token: string) {
    const user = await this.usersRepository.findByToken(reset_token);
    if (!user) {
      throw new NotFoundException('User not found.');
    }

    await this.usersRepository.updatePassword(user.id, password);
  }
}
