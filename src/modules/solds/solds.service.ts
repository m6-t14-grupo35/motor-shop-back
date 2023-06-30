import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateSoldDto } from './dto/create-sold.dto';
import { SoldsRepository } from './repositories/solds.respository';

@Injectable()
export class SoldsService {
  constructor(private soldsRepository: SoldsRepository) {}
  async create(
    createSoldDto: CreateSoldDto,
    ad_id: string,
    user_id: string /* is_seller:boolean */,
  ) {
    /* if(!is_seller){
      throw new ForbiddenException('Not allowed to not seller users sold a product.')
    } */
    return await this.soldsRepository.create(createSoldDto, ad_id, user_id);
  }

  async findAll() {
    return await this.soldsRepository.findAll();
  }

  async findOne(id: string) {
    const sold = await this.soldsRepository.findOne(id);
    if (!sold) {
      throw new NotFoundException('Sold not found');
    }
    return sold;
  }

  async remove(id: string) {
    const sold = await this.soldsRepository.findOne(id);
    if (!sold) {
      throw new NotFoundException('Sold not found');
    }
    return await this.soldsRepository.delete(id);
  }
}
