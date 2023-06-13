import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateAdDto } from '../../dto/create-ad.dto';
import { Ad } from '../../entities/ad.entity';
import { AdsRepository } from '../ads.repository';
import { UpdateAdDto } from '../../dto/update-ad.dto';

@Injectable()
export class AdsInMemoryRepository implements AdsRepository {
  private database: Ad[] = [];
  create(data: CreateAdDto, user_id: string): Ad | Promise<Ad> {
    const newAd = new Ad();
    Object.assign(newAd, {
      ...data,
      user_id: user_id,
    });

    this.database.push(newAd);

    return newAd;
  }
  findAll(): Ad[] | Promise<Ad[]> {
    return plainToInstance(Ad, this.database);
  }
  findOne(id: string): Ad | Promise<Ad> {
    const ad = this.database.find((Ad) => Ad.id == id);
    return plainToInstance(Ad, ad);
  }
  update(id: string, data: UpdateAdDto): Ad | Promise<Ad> {
    const adIndex = this.database.findIndex((ad) => ad.id == id);
    this.database[adIndex] = {
      ...this.database[adIndex],
      ...data,
    };
    return plainToInstance(Ad, this.database[adIndex]);
  }
  delete(id: string): void | Promise<void> {
    const adIndex = this.database.findIndex((Ad) => Ad.id == id);
    this.database.splice(adIndex, 1);
  }
}