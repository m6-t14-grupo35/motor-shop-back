import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { Ad } from 'src/modules/ads/entities/ad.entity';
import { hashSync } from 'bcryptjs';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    const birthData = new Date(data.birthdate);

    const user = new User();
    Object.assign(user, {
      ...data,
      birthdate: birthData,
    });

    const newUser = await this.prisma.user.create({
      data: { ...user },
    });

    return newUser;
  }
  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return plainToInstance(User, users);
  }
  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return plainToInstance(User, user);
  }
  async findAds(user_id: string): Promise<Ad[]> {
    const ads = await this.prisma.ad.findMany({
      where: { user_id },
      include: { Image: true, Comment: true },
    });
    return ads;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return user;
  }
  async findByToken(token: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { reset_token: token },
    });
    return user;
  }
  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user = this.prisma.user.update({
      where: { id },
      data: { ...data },
    });
    return plainToInstance(User, user);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
  async updateToken(email: string, resetToken: string): Promise<void> {
    await this.prisma.user.update({
      where: { email },
      data: { reset_token: resetToken },
    });
  }

  async updatePassword(id: string, password: string): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: { password: hashSync(password, 10), reset_token: null },
    });
  }
}
