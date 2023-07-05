import { Injectable } from '@nestjs/common';
import { SoldsRepository } from '../solds.respository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateSoldDto } from '../../dto/create-sold.dto';
import { Sold } from '../../entities/sold.entity';

@Injectable()
export class SoldsPrismaRepository implements SoldsRepository {
  constructor(private prisma: PrismaService) {}
  async create(
    data: CreateSoldDto,
    ad_id: string,
    user_id: string,
  ): Promise<Sold> {
    const sold = new Sold();
    Object.assign(sold, {
      ...data,
      ad_id: ad_id,
      user_id: user_id,
    });

    const newSold = await this.prisma.sold.create({
      data: {
        ...sold,
      },
    });

    await this.prisma.ad.update({
      where: { id: ad_id },
      data: { is_sold: true },
    });

    return newSold;
  }
  async findAll(): Promise<Sold[]> {
    const solds = await this.prisma.sold.findMany();
    return solds;
  }

  async findOne(id: string): Promise<Sold> {
    const sold = await this.prisma.sold.findUnique({
      where: { id },
    });
    return sold;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.sold.delete({
      where: { id },
    });
  }
}
