import { Injectable } from '@nestjs/common';
import { CreateSoldDto } from './dto/create-sold.dto';
import { UpdateSoldDto } from './dto/update-sold.dto';

@Injectable()
export class SoldsService {
  create(createSoldDto: CreateSoldDto) {
    return 'This action adds a new sold';
  }

  findAll() {
    return `This action returns all solds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sold`;
  }

  update(id: number, updateSoldDto: UpdateSoldDto) {
    return `This action updates a #${id} sold`;
  }

  remove(id: number) {
    return `This action removes a #${id} sold`;
  }
}
