import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AdsRepository } from '../ads.repository';
import { CreateAdDto } from '../../dto/create-ad.dto';
import { Ad } from '../../entities/ad.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateAdDto } from '../../dto/update-ad.dto';

@Injectable()
export class AdsPrismaRepository implements AdsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateAdDto, user_id: string): Promise<Ad> {
    const ad = new Ad();
    Object.assign(ad, {
      ...data,
      user_id: user_id
    });
    const newAd = await this.prisma.ad.create({
        data: {
          ...ad,
        },
      });

    return newAd;
  }
  async findAll(): Promise<Ad[]> {
    const ads = await this.prisma.ad.findMany();
    return ads;
  }
  async findOne(id: string): Promise<Ad> {
    const ad = await this.prisma.ad.findUnique({
      where: { id }
    });
    return ad
  }
  async update(id: string, data: UpdateAdDto): Promise<Ad> {
    const ad = this.prisma.ad.update({
      where: { id },
      data: { ...data },
    });
    return ad;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.ad.delete({
      where: { id },
    });
  }
}
