import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AdsRepository } from '../ads.repository';
import { CreateAdDto } from '../../dto/create-ad.dto';
import { Ad } from '../../entities/ad.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { UpdateAdDto } from '../../dto/update-ad.dto';
import { Comment } from 'src/modules/comments/entities/comment.entity';

@Injectable()
export class AdsPrismaRepository implements AdsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateAdDto, user_id: string): Promise<Ad> {
    const ad = new Ad();
    const user = await this.prisma.user.findUnique({ where: { id: user_id } });
    Object.assign(ad, {
      ...data,
      user_id: user_id,
    });

    const newAd = await this.prisma.ad.create({
      data: {
        ...ad,
      },
    });

    return newAd;
  }
  async findAll(): Promise<Ad[]> {
    const ads = await this.prisma.ad.findMany({ take: 6 });
    /* const firstAd = ads[5]
    const cursor = firstAd.id
    const pgAds = await this.prisma.ad.findMany({
      skip: 1,
      take: 6,
      cursor: { id: cursor}
    });
    return pgAds;*/
    return ads;
  }

  async findOne(id: string): Promise<Ad> {
    const ad = await this.prisma.ad.findUnique({
      where: { id },
      include: {
        Image: true,
        Comment: true,
        User: {
          select: {
            name: true,
            image: true,
            description: true,
          },
        },
      },
    });
    return ad;
  }

  async findComments(ad_id: string): Promise<Comment[]> {
    const comments = await this.prisma.comment.findMany({
      where: { ad_id },
      include: { User: { select: { id: true, name: true, image: true } } },
    });
    return comments;
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
