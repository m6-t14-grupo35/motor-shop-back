import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { AdsRepository } from './repositories/ads.repository';


@Injectable()
export class AdsService {
  constructor(private adsRepository: AdsRepository) {}
  async create(createAdDto: CreateAdDto, user_id: string) {
    return await this.adsRepository.create(createAdDto, user_id)
  }

  async findAll() {
    return await this.adsRepository.findAll()
  }

  async findOne(id: string) {
    const ad = await this.adsRepository.findOne(id)
    if(!ad){
      throw new NotFoundException("Advertisement not found.")
    }
    return ad;
  }

  async findComments(id: string) {
    return await this.adsRepository.findComments(id);
  }

  async update(id: string, updateAdDto: UpdateAdDto) {
    const ad = await this.adsRepository.findOne(id)
    if(!ad){
      throw new NotFoundException("Advertisement not found.")
    }
    return await this.adsRepository.update(id, updateAdDto)
  }

  @HttpCode(204)
  async remove(id: string) {
    const ad = await this.adsRepository.findOne(id)
    if(!ad){
      throw new NotFoundException("Advertisement not found.")
    }
    return await this.adsRepository.delete(id)
  }
}
